import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

import { MatTable } from '@angular/material/table';

import { PrevioService } from 'src/app/features/previo/previo.service';
import { ModalService } from '../../shared/services/modal.service';

import {
  ChangeDireccion,
  Localizacion,
  Norma,
} from 'src/app/shared/interfaces/previo.interface';

@Component({
  selector: 'app-previo-admin',
  templateUrl: './previo-admin.component.html',
  styleUrls: ['./previo-admin.component.css'],
})
export class PrevioAdminComponent implements OnInit{
  @ViewChild(MatTable) table!: MatTable<Localizacion>;

  // public isFormVisible: boolean = false;
  public direcciones!: Localizacion[];
  public normas!: Norma[];
  public nuevaNormaInput: string = '';

  public displayedColumns = [
    'nombre',
    'direccion',
    'gMaps',
    'actions',
  ];

  public newPlace = new FormGroup({
    nombreNuevo: new FormControl(''),
    direccionNuevo: new FormControl(''),
    enlaceNuevo: new FormControl(''),
  });

  constructor(private data: PrevioService, private modals: ModalService) {}

  ngOnInit() {
    this.getDirecciones();
    this.getNormas();
  }

  // ** --- NORMAS ---

  getNormas() {
    this.data.getNormas().subscribe({
      next: (normas) => (this.normas = normas.normas),
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteRule(norma: Norma) {
    // Pedir confirmación
    this.modals
      .openDialog('¿Desea eliminar la siguiente norma?', norma.norma)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminar la norma
          this.data.deleteNorma(norma).subscribe({
            next: () => {
              this.modals.openSnackBar('Norma eliminada correctamente');
              this.normas = this.normas.filter((x) => x.id != norma.id);
            },
            error: (err) => this.modals.openSnackBar(err),
          });
        }
      });
  }

  saveRule() {
    if (this.nuevaNormaInput.length > 0) {
      const normaEnviar: Norma = {
        id: this.findFreeId(),
        norma: this.nuevaNormaInput,
      };

      this.data.setNormas(normaEnviar).subscribe({
        next: (resp) => {
          this.modals.openSnackBar(
            `Norma creada con éxito: ${resp.norma.id} - ${resp.norma.norma}`
          );
          this.normas.push(normaEnviar);
          this.nuevaNormaInput = '';
        },
        error: (err) => this.modals.openSnackBar(err),
      });
    }
  }

  // ** --- DIRECCIONES ---

  getDirecciones() {
    this.data.getDirecciones().subscribe({
      next: (resp) => (this.direcciones = resp.direcciones),
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  delete(toDelete: Localizacion) {
    // Pedir confirmación
    this.modals
      .openDialog('¿Desea eliminar la siguiente localización?', toDelete.nombre)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminación
          this.data.deleteAddress(toDelete).subscribe({
            next: () => {
              this.direcciones = this.direcciones.filter(
                (item) => JSON.stringify(item) != JSON.stringify(toDelete)
              );
              this.table.renderRows();
              this.modals.openSnackBar(`Localización eliminada correctamente.`);
            },
            error: (err) => this.modals.openSnackBar(err),
          });
        }
      });
  }

  // toggleForm() {
  //   this.isFormVisible = !this.isFormVisible;
  // }

  onSubmitAddress(f: FormGroupDirective) {
    const formData = this.newPlace.value;
    const newDirection: Localizacion = {
      nombre: formData.nombreNuevo!,
      direccion: formData.direccionNuevo!,
      gMaps: formData.enlaceNuevo!,
    };

    this.data.setNewAddress(newDirection).subscribe({
      next: (resp: ChangeDireccion) => {
        this.direcciones.push(resp.direccion);
        f.resetForm();
        this.newPlace.reset();
        this.table.renderRows();

        this.modals.openSnackBar('Localización añadida correctamente');
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  findFreeId(): number {
    if (this.normas.length == 0) return 0;
    let usedIds: number[] = [];
    this.normas.forEach((item) => {
      usedIds.push(item.id);
    });
    for (let i = 0; i < usedIds.length; i++) {
      if (!usedIds.includes(i + 1)) return i + 1;
    }
    const newId = usedIds.length + 1;
    return newId;
  }

  trackEnter(x: KeyboardEvent) {
    if (x.code == 'Enter') this.saveRule();
  }
}
