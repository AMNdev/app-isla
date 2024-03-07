import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayasService } from 'src/app/features/playas/playas.service';
import { ModalService } from '../../shared/services/modal.service';
import { Playas } from 'src/app/shared/interfaces/playas.interface';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-playas-admin',
  templateUrl: './playas-admin.component.html',
  styleUrls: ['./playas-admin.component.css'],
})
export class PlayasAdminComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<Playas>;
  public playas!: Playas[];

  public newPlaya = new FormGroup({
    descripcionNuevo: new FormControl(''),
    gMapsNuevo: new FormControl(''),
    idNuevo: new FormControl('', [
      Validators.pattern(/^[A-Za-z0-9]+$/),
      Validators.minLength(4),
    ]),
    imagenNuevo: new FormControl(''),
    nombreNuevo: new FormControl(''),
  });

  public displayedColumns = [
    'id',
    'nombre',
    'descripcion',
    'gMaps',
    'imagen',
    'actions',
  ];

  constructor(private data: PlayasService, private modals: ModalService) {}

  ngOnInit() {
    this.getPlayas();
  }

  getPlayas() {
    this.data.getPlayas().subscribe({
      next: (playas) => (this.playas = playas),
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  setPlaya(f: FormGroupDirective) {
    // TODO: condicion!!
    const formData = this.newPlaya.value;
    if (f.form.valid && this.checkUniqueId(formData.idNuevo!)) {
      const playaEnviar: Playas = {
        descripcion: formData.descripcionNuevo!,
        gMaps: formData.gMapsNuevo!,
        id: formData.idNuevo!,
        imagen: formData.imagenNuevo!,
        nombre: formData.nombreNuevo!,
      };

      this.data.setPlaya(playaEnviar).subscribe({
        next: (resp) => {
          this.playas.push(resp);
          f.resetForm();
          this.newPlaya.reset();
          this.table.renderRows();
          this.modals.openSnackBar(
            `Playa añadida con éxito: ${resp.id} - ${resp.nombre}`
          );
        },
        error: (err) => this.modals.openSnackBar(err),
      });
    }
  }

  deletePlaya(playa: Playas) {
    // Pedir confirmación
    this.modals
      .openDialog('¿Desea eliminar la siguiente playa?', playa.nombre)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminar la norma
          this.data.deletePlaya(playa).subscribe({
            next: () => {
              this.modals.openSnackBar('Playa eliminada correctamente');
              this.playas = this.playas.filter((x) => x.id != playa.id);
            },
            error: ({ message }) => this.modals.openSnackBar(message),
          });
        }
      });
  }

  checkUniqueId(id: string): boolean {
    const existePlaya = this.playas.find((playa) => playa.id == id);
    if (!existePlaya) return true;
    else {
      this.modals.openSnackBar('Debe elegir otro identificador');
      return false;
    }
  }
}
