import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { TurismoService } from 'src/app/features/turismo/turismo.service';
import { Turismo } from 'src/app/shared/interfaces/turismo.interface';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-turismo-admin',
  templateUrl: './turismo-admin.component.html',
  styleUrls: ['./turismo-admin.component.css'],
})
export class TurismoAdminComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<Turismo>;
  public turismo: Turismo[] = [];
  columnas = [
    'nombre',
    'direccion',
    'descripcion',
    'link',
    'gMaps',
    'actions'
  ];
  public form = this.fb.group({
    nombre: ['', [Validators.required]],
    direccion: [''],
    link: [''],
    descripcion: [''],
    gMaps: [''],
  });

  constructor(
    private data: TurismoService,
    private fb: FormBuilder,
    private modals: ModalService
  ) {}

  ngOnInit(): void {
    this.getTurismo();
  }

  getTurismo() {
    this.data.getTurismo().subscribe({
      next: (resp) => {
        this.turismo = resp.turismoItems;
      },
      error: (err) => console.log(err),
    });
  }

  addTurismo(f: FormGroupDirective) {
    const formdata = f.form.value;
    this.data.newTurismo(formdata as Turismo).subscribe({
      next: (resp) => {
        this.turismo.push(resp.turismoItem);
        f.resetForm();
        this.form.reset();
        this.table.renderRows();
        this.modals.openSnackBar('Turismo añadido correctamente');
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteTurismo(toDelete: Turismo) {
    this.modals
      .openDialog('¿Desea eliminar el elemento?', toDelete.nombre)
      .subscribe((confirmation) => {
        if (confirmation) {
          // Eliminación
          this.data.deleteTurismo(toDelete).subscribe({
            next: (eliminado) => {
              this.turismo = this.turismo.filter(
                (item) =>
                  JSON.stringify(item) != JSON.stringify(eliminado.turismoItem)
              );
              this.table.renderRows();
              this.modals.openSnackBar(
                `Elemento eliminado correctamente: ${eliminado.turismoItem.nombre}`
              );
            },
            error: (err) => this.modals.openSnackBar(err),
          });
        }
      });
  }
}
