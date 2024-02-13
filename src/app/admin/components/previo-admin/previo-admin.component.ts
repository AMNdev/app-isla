import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

import { MatTable } from '@angular/material/table';

import { PrevioService } from 'src/app/features/previo/previo.service';
import { ModalService } from '../../services/modal.service';

import {
  Localizacion,
  Norma,
} from 'src/app/shared/interfaces/previo.interface';

@Component({
  selector: 'app-previo-admin',
  templateUrl: './previo-admin.component.html',
  styleUrls: ['./previo-admin.component.css'],
})
export class PrevioAdminComponent {
  @ViewChild(MatTable) table!: MatTable<Localizacion>;

  // public isFormVisible: boolean = false;
  public direcciones!: Localizacion[];
  public normas!: Norma[];
  public nuevaNormaInput: string = '';

  public displayedColumns = [
    'id',
    'nombre',
    'direccion',
    'localizacion',
    'enlaceGoogleMaps',
    'actions',
  ];

  public newPlace = new FormGroup({
    idNuevo: new FormControl(''),
    nombreNuevo: new FormControl(''),
    direccionNuevo: new FormControl(''),
    latitudNuevo: new FormControl(''),
    longitudNuevo: new FormControl(''),
    enlaceNuevo: new FormControl(''),
  });

  constructor(
    private data: PrevioService,
    private router: Router,
    private modals: ModalService
  ) {}

  ngOnInit() {
    // TODO: reformular la gestión de errores con next y error en el subscribe
    // TODO: y añadir snackbars y dialogs
  this.data.getDirecciones().subscribe((direcciones) => {
      this.direcciones = direcciones;
    });
    this.data.getNormas().subscribe((normas) => {
      this.normas = normas;
    });
  }

  // ** --- NORMAS ---

  deleteRule(norma: Norma) {
  // TODO: reformular la gestión de errores con next y error en el subscribe
    // Pedir confirmación
    this.modals
      .openDialog('¿Desea eliminar la siguiente norma?', norma.norma)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminar la norma
          this.data.deleteNorma(norma).subscribe((resp) => {
            if (resp === 'error') {
              this.modals.openSnackBar('Error eliminando norma');
              return;
            }
            this.modals.openSnackBar('Norma eliminada correctamente');
            this.normas = this.normas.filter((x) => x.id != norma.id);
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
  // TODO: reformular la gestión de errores con next y error en el subscribe

      this.data.setNormas(normaEnviar).subscribe((resp) => {
        if (resp.id == 0 && resp.norma == 'error') {
          this.modals.openSnackBar('Error creando norma');
          return;
        }
        this.modals.openSnackBar(
          `Norma creada con éxito: ${resp.id} - ${resp.norma}`
        );

        this.normas.push(normaEnviar);
        this.nuevaNormaInput = '';
      });
    }
  }

  // ** --- DIRECCIONES ---

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
            error: () => this.modals.openSnackBar('Error eliminando norma'),
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
      id: formData.idNuevo!,
      nombre: formData.nombreNuevo!,
      direccion: formData.direccionNuevo!,
      localizacion: {
        latitud: +formData.latitudNuevo!,
        longitud: +formData.longitudNuevo!,
      },
      enlaceGoogleMaps: formData.enlaceNuevo!,
    };

    this.data.setNewAddress(newDirection).subscribe({
      next: (resp: Localizacion) => {
        this.direcciones.push(resp);
        f.resetForm();
        this.newPlace.reset();
        this.table.renderRows();

        this.modals.openSnackBar('Localización añadida correctamente');
      },
      error: () => this.modals.openSnackBar('Error añadiendo localización'),
    });
  }

  findFreeId(): number {
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
