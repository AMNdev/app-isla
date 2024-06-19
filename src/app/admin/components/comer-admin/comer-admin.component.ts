import { Component, OnInit, ViewChild } from '@angular/core';
import { ComerService } from 'src/app/features/comer/comer.service';
import { ModalService } from '../../shared/services/modal.service';
import {
  Restaurante,
  RestauranteRespuesta,
} from 'src/app/shared/interfaces/restaurantes.interface';
import { MatTable } from '@angular/material/table';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-comer-admin',
  templateUrl: './comer-admin.component.html',
  styleUrls: ['./comer-admin.component.css'],
})
export class ComerAdminComponent implements OnInit {
  public title = 'Restaurantes'

  @ViewChild(MatTable) table!: MatTable<Restaurante>;

  public restaurantes!: Restaurante[];
  public addForm = this.fb.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    link: [''],
    descripcion: [''],
    gMaps: ['', [Validators.required]],
  });
  public displayedColumns = [
    'nombre',
    'direccion',
    'descripcion',
    'link',
    'gMaps',
    'actions',
  ];

  constructor(
    private data: ComerService,
    private modals: ModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.data.getRestaurants().subscribe({
      next: (resp) => {
        this.restaurantes = resp.restaurantes;
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  addRestaurant(form: FormGroupDirective) {
    const newVenue = form.value;

    this.data.newRestaurant(newVenue).subscribe({
      next: (resp: RestauranteRespuesta) => {
        const nuevo = resp.restaurante;
        this.restaurantes.push(nuevo);

        form.resetForm();
        this.addForm.reset();
        this.table.renderRows();

        this.modals.openSnackBar(
          `Restaurante añadido correctamente: ${nuevo.nombre}`
        );
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteRestaurant(toDelete: Restaurante) {
    // Pedir confirmación
    this.modals
      .openDialog('¿Desea eliminar el siguiente restaurante?', toDelete.nombre)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminación
          this.data.deleteRestaurant(toDelete).subscribe({
            next: () => {
              this.restaurantes = this.restaurantes.filter(
                (item) => JSON.stringify(item) != JSON.stringify(toDelete)
              );
              // this.table.renderRows();
              this.modals.openSnackBar(`Restaurante eliminado correctamente.`);
            },
            error: (err) => this.modals.openSnackBar(err),
          });
        }
      });
  }

  modifyRestaurant(venue: Restaurante) {
    this.data.modifyRestaurant(venue);
  }
}
