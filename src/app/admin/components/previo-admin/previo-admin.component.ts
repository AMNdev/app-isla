import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

import { MatTable } from '@angular/material/table';

import { PrevioService } from 'src/app/features/previo/previo.service';
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

  constructor(private data: PrevioService, private router: Router) {}

  ngOnInit() {
    this.data.getDirecciones().subscribe((direcciones) => {
      // if (!direcciones) return this.router.navigateByUrl('./');
      this.direcciones = direcciones;
      return;
    });
    this.data.getNormas().subscribe((normas) => {
      // if (!normas) return this.router.navigateByUrl('./');
      this.normas = normas;
      return;
    });
  }
  // TODO: cambiar alerts por mat dialog

  // --- NORMAS ---

  deleteRule(norma: Norma) {
    console.log('Eliminando: ', norma);
    if (
      confirm(`¿Desea eliminar la siguiente norma?

    "${norma.norma}"`)
    ) {
      this.normas = this.normas.filter((x) => x.id != norma.id);
      // console.log(this.normas)
      this.data.deleteNorma(norma);
    }
  }

  saveRule() {
    if (
      this.nuevaNormaInput.length > 0 &&
      confirm(
        `¿Desea añadir la siguiente norma?

      "${this.nuevaNormaInput}"`
      )
    ) {
      // find first free id
      const freeId = this.findFreeId();
      const normaEnviar: Norma = {
        id: freeId,
        norma: this.nuevaNormaInput,
      };
      this.data.setNormas(normaEnviar);
      this.normas.push(normaEnviar);
      this.normas = [...new Set(this.normas)];
      this.nuevaNormaInput = '';
    }
  }

  // --- DIRECCIONES ---

  // editDirection(x: any) {
  //   console.log(x);
  // }

  delete(toDelete: Localizacion) {
    console.log(toDelete);
    // TODO: añadir confirmacion por matdialog

    this.direcciones = this.direcciones.filter(
      (item) => JSON.stringify(item) != JSON.stringify(toDelete)
    );
  }

  // toggleForm() {
  //   this.isFormVisible = !this.isFormVisible;
  // }

  onSubmit(f: FormGroupDirective) {
    const newDirection: Localizacion = {
      id: this.newPlace.value.idNuevo!,
      nombre: this.newPlace.value.nombreNuevo!,
      direccion: this.newPlace.value.direccionNuevo!,
      localizacion: {
        latitud: +this.newPlace.value.latitudNuevo!,
        longitud: +this.newPlace.value.longitudNuevo!,
      },
      enlaceGoogleMaps: this.newPlace.value.enlaceNuevo!,
    };

    this.direcciones.push(newDirection);
    this.table.renderRows();
    this.newPlace.reset();
    f.resetForm();

    // TODO: añadir a la BD
  }

  findFreeId(): number {
    let usedIds: number[] = [];
    this.normas.forEach((item) => {
      usedIds.push(item.id);
    });
    for (let i = 0; i < usedIds.length; i++) {
      if (!usedIds.includes(i + 1)) return i + 1;
    }
    return usedIds.length + 1;
  }

  trackEnter(x: KeyboardEvent) {
    if (x.code == 'Enter') this.saveRule();
  }
}
