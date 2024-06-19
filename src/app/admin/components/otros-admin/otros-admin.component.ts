import { Component, OnInit, ViewChild } from '@angular/core';
import { OtrosService } from 'src/app/features/otros/otros.service';
import { ModalService } from '../../shared/services/modal.service';
import { MatTable } from '@angular/material/table';

import {
  Gasolineras,
  Salud,
  Tiendas,
} from 'src/app/shared/interfaces/otros.interface';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-otros-admin',
  templateUrl: './otros-admin.component.html',
  styleUrls: ['./otros-admin.component.css'],
})
export class OtrosAdminComponent implements OnInit {
  public title = 'Otra información útil'

  // * Gasolineras

  @ViewChild(MatTable) gasolinerasTabla!: MatTable<Gasolineras>;
  public gasolineras: Gasolineras[] = [];
  columnasGasolineras = [
    'nombre',
    'direccion',
    'poblacion',
    'pais',
    'gMaps',
    'todoElDia',
    'actions',
  ];
  public gasolineraForm = this.fb.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    poblacion: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    gMaps: ['', [Validators.required]],
    todoElDia: [false],
  });

  // * Salud

  @ViewChild(MatTable) saludTabla!: MatTable<Salud>;
  public salud!: Salud[];
  columnasSalud = [
    'nombre',
    'tipo',
    'direccion',
    'poblacion',
    'gMaps',
    'todoElDia',
    'actions',
  ];
  public saludForm = this.fb.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    poblacion: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    gMaps: ['', [Validators.required]],
    todoElDia: [false],
  });

  // * Tiendas

  @ViewChild(MatTable) tiendasTabla!: MatTable<Tiendas>;
  public tiendas!: Tiendas[];
  columnasTiendas = [
    'nombre',
    'direccion',
    'descripcion',
    'poblacion',
    'gMaps',
    'actions',
  ];
  public tiendasForm = this.fb.group({
    nombre: ['', [Validators.required]],
    direccion: [''],
    descripcion: [''],
    poblacion: [''],
    gMaps: [''],
  });


  constructor(
    private data: OtrosService,
    private fb: FormBuilder,
    private modals: ModalService
  ) {}

  ngOnInit(): void {
    this.getGasolineras();
    this.getSalud();
    this.getTiendas();
  }

  // * Gasolineras

  getGasolineras() {
    this.data.getGasolineras().subscribe({
      next: (resp) => {
        this.gasolineras = resp.gasolineras;
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  addGasolinera(f: FormGroupDirective) {
    const formdata = f.form.value;
    this.data.newGasolinera(formdata as Gasolineras).subscribe({
      next: (resp) => {
        this.gasolineras.push(resp.gasolinera);
        f.resetForm();
        this.gasolineraForm.reset();
        this.gasolinerasTabla.renderRows();
        this.modals.openSnackBar('Gasolinera añadida correctamente');
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteGasolinera(toDelete: Gasolineras) {
    this.modals
      .openDialog('¿Desea eliminar la siguiente gasolinera?', toDelete.nombre)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminación
          this.data.deleteGasolinera(toDelete).subscribe({
            next: () => {
              this.gasolineras = this.gasolineras.filter(
                (item) => JSON.stringify(item) != JSON.stringify(toDelete)
              );
              this.gasolinerasTabla.renderRows();
              this.modals.openSnackBar(`Gasolinera eliminada correctamente.`);
            },
            error: (err) => this.modals.openSnackBar(err),
          });
        }
      });
  }

  // * Salud

  getSalud() {
    this.data.getSalud().subscribe({
      next: (resp) => {
        this.salud = resp.salud;
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  addSalud(f: FormGroupDirective) {
    const formdata = f.form.value;
    this.data.newSalud(formdata as Salud).subscribe({
      next: (resp) => {
        this.salud.push(resp.salud);
        f.resetForm();
        this.saludForm.reset();
        this.saludTabla.renderRows();
        this.modals.openSnackBar('Centro añadido correctamente');
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteSalud(toDelete: Salud) {
    this.modals
      .openDialog('¿Desea eliminar el siguiente centro?', toDelete.nombre)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminación
          this.data.deleteSalud(toDelete).subscribe({
            next: () => {
              this.salud = this.salud.filter(
                (item) => JSON.stringify(item) != JSON.stringify(toDelete)
              );
              this.saludTabla.renderRows();
              this.modals.openSnackBar(`Centro eliminado correctamente.`);
            },
            error: (err) => this.modals.openSnackBar(err),
          });
        }
      });
  }

  // * Tiendas

  getTiendas() {
    this.data.getTiendas().subscribe({
      next: (resp) => {
        this.tiendas = resp.tiendas;
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  addTienda(f: FormGroupDirective) {
    const formdata = f.form.value;
    this.data.newTienda(formdata as Tiendas).subscribe({
      next: (resp) => {
        this.tiendas.push(resp.tienda);
        f.resetForm();
        this.tiendasForm.reset();
        this.tiendasTabla.renderRows();
        this.modals.openSnackBar('Tienda añadida correctamente');
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteTienda(toDelete: Tiendas) {
    this.modals
      .openDialog('¿Desea eliminar la siguente tienda?', toDelete.nombre)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminación
          this.data.deleteTienda(toDelete).subscribe({
            next: () => {
              this.tiendas = this.tiendas.filter(
                (item) => JSON.stringify(item) != JSON.stringify(toDelete)
              );
              this.tiendasTabla.renderRows();
              this.modals.openSnackBar(`Tienda eliminada correctamente.`);
            },
            error: (err) => this.modals.openSnackBar(err),
          });
        }
      });
  }
}
