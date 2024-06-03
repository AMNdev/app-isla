import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoService } from 'src/app/features/info/info.service';
import { ModalService } from '../../shared/services/modal.service';
import { Aparato, Instrucciones, Piso } from 'src/app/shared/interfaces/info.interface';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-info-admin',
  templateUrl: './info-admin.component.html',
  styleUrls: ['./info-admin.component.css'],
})
export class InfoAdminComponent implements OnInit {
  // *** Piso
  public piso!: Piso;
  public showForm: boolean = false;
  public newVideo = new FormGroup({
    nuevaDescripcion: new FormControl('', [Validators.minLength(4)]),
    nuevaUrl: new FormControl('', [Validators.minLength(4)]),
  });

  //  *** Instrucciones
  public instrucciones!: Instrucciones;
  public aparatos!: Aparato[];

  @ViewChild(MatTable) table!: MatTable<Aparato>;
  public displayedColumns = [
    'aparato',
    'descripcion',
    'video',
    'imagenes',
    'actions',
  ];
  public newDevice = new FormGroup({
    // nuevaDescripcion: new FormControl('', [Validators.minLength(4)]),
    // nuevaUrl: new FormControl('', [Validators.minLength(4)]),
    // id: new FormControl(''),
    newAparato: new FormControl(''),
    newDescripcion: new FormControl(''),
    newVideo: new FormControl([]),
    newImagenes: new FormControl([]),
    // actions: new FormControl(''),
  });

  // export interface Instrucciones {
  //   id: string;
  //   aparatos: [
  //     {
  //       aparato: string;
  //       descripcion: string[];
  //       video: string[];
  //       imagenes: string[];
  //     }
  //   ];
  // }

  constructor(private data: InfoService, private modals: ModalService) {}

  ngOnInit(): void {
    this.getPiso();
    this.getInstrucciones();
  }

  // *** Piso

  // todo: hacer un debounced save y quitar el botón de guardar. Establecer un botón de editar, eso sí, para hacer los campos disabled true/false
  // todo: validar campos de piso antes de enviar

  getPiso() {
    this.data.getPiso().subscribe({
      next: (piso) => (this.piso = piso),
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  setPiso() {
    this.data.setPiso(this.piso).subscribe({
      next: (piso) => {
        this.piso = piso;
        this.modals.openSnackBar(`Guardado con éxito`);
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  addVideo(f: FormGroupDirective) {
    // this.pisoHasChanges = true;
    const formData = this.newVideo.value;
    this.piso.video.push({
      descripcion: formData.nuevaDescripcion!,
      videoUrl: formData.nuevaUrl!,
    });
    f.resetForm();
    this.setPiso();
  }

  deleteVideo(index: number) {
    // this.pisoHasChanges = true;

    this.modals
      .openDialog(
        '¿Desea eliminar el vídeo?',
        this.piso.video.at(index)?.descripcion
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.piso.video.splice(index, 1);
          this.setPiso();
        }
      });
  }

  showAddForm() {
    this.showForm = !this.showForm;
  }

  //  *** Instrucciones
  getInstrucciones() {
    this.data.getInstrucciones().subscribe({
      next: (instrucciones) => {
        console.log({ instrucciones });
        this.aparatos = instrucciones.aparatos
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteAparato(element:any) {
    console.log(element)

  }

  // TODO arreglar el envío de datos a la bd, esto hay que arreglarlo después de tener claros los endpoints del backend
// hay que cambiar la estructura de la bd en json server y no tiene sentido hacerlo ahora y otra vez cuando cambie la bb

  setNewDevice(f: FormGroupDirective) {
    console.log(f)
    const formData = this.newDevice.value;
    if (f.form.valid) {
      const sendDevice: Aparato = {
        // id: 'instrucciones',

          aparato: formData.newAparato!,
          descripcion: [formData.newDescripcion!],
          imagenes: formData.newImagenes!,
          video: formData.newVideo!,
        }
        // nombre: formData.nombreNuevo!,

      this.data.setInstrucciones(sendDevice).subscribe({
        next: (resp) => {
          // this.playas.push(resp);
          f.resetForm();
          // this.newPlaya.reset();
          this.table.renderRows();
          this.modals.openSnackBar(
            `Playa añadida con éxito: ${resp} - ${resp}`
          );
        },
        error: (err) => this.modals.openSnackBar(err),
      })
    }
  }

  // setInstrucciones() {}

  // deleteInstrucciones() {}
}
