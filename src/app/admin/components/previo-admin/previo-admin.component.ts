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
      this.direcciones = direcciones;
    });

    this.data.getNormas().subscribe((normas) => {
      this.normas = normas;
    });
  }
  // TODO: cambiar alerts por mat dialog
  // TODO: cambiar confirms por mat dialog

  // --- NORMAS ---

  deleteRule(norma: Norma) {
    if (
      confirm(`¿Desea eliminar la siguiente norma?

    "${norma.norma}"`)
    ) {
      this.data.deleteNorma(norma).subscribe((resp) => {
        if (resp === 'error') {
          alert('Error eliminando norma');
          return;
        }
        alert(`eliminada con éxito`);
        this.normas = this.normas.filter((x) => x.id != norma.id);
      });
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
      const normaEnviar: Norma = {
        id: this.findFreeId(),
        norma: this.nuevaNormaInput,
      };

      this.data.setNormas(normaEnviar).subscribe((resp) => {
        if (resp.id == 0 && resp.norma == 'error') {
          alert('error creando norma');
          return;
        }
        alert(`Norma creada con éxito:
          ${resp.id} - ${resp.norma}`);

        this.normas.push(normaEnviar);
        this.nuevaNormaInput = '';
      });
    }
  }

  // --- DIRECCIONES ---

   delete(toDelete: Localizacion) {
    if (
      confirm(`¿Desea eliminar la siguiente dirección?

      "${toDelete.id}"`)
      ) {
      this.data.deleteAddress(toDelete).subscribe({
        next: ()=> {
          this.direcciones = this.direcciones.filter(
            (item) => JSON.stringify(item) != JSON.stringify(toDelete))
            this.table.renderRows();
              alert(`eliminada con éxito`);
        },
        error: ()=>
              alert('Error eliminando norma')
        ,
      });

    }
  }
  // TODO: añadir confirmacion por matdialog

  // TODO: reformular la gestión de errores con next y error en el subscribe



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
        alert('Añadida con éxito');
      },
      error: () => alert(`Error inesperado`),
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
