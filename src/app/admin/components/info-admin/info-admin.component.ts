import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { InfoService } from 'src/app/features/info/info.service';
import { ModalService } from '../../shared/services/modal.service';
import {
  Aparato,
  Instrucciones,
  Piso,
} from 'src/app/shared/interfaces/info.interface';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { FileUploadService } from 'src/app/services/file-upload.service';
import { Observable } from 'rxjs';
import { ModalImagenService } from '../../shared/services/modal-imagen.service';

@Component({
  selector: 'app-info-admin',
  templateUrl: './info-admin.component.html',
  styleUrls: ['./info-admin.component.css'],
})
export class InfoAdminComponent implements OnInit {
  public title = 'Sobre el apartamento';

  // *** Piso
  public piso!: Piso;
  public showForm: boolean = false;
  public newVideo = new FormGroup({
    nuevaDescripcion: new FormControl('', [Validators.minLength(4)]),
    nuevaUrl: new FormControl('', [Validators.minLength(4)]),
  });

  //  *** Instrucciones
  // @ViewChild(MatTable) table!: MatTable<Aparato>;
  public instrucciones!: Instrucciones;
  public aparatos!: Aparato[];
  public displayedColumns = [
    'aparato',
    'descripcion',
    'video',
    'imagenes',
    'actions',
  ];
  public newDevice = new FormGroup({
    newAparato: new FormControl(''),
    newDescripcion: new FormControl(''),
    newVideo: new FormControl(''),
    newImagenes: new FormControl(''),
    // actions: new FormControl(''),
  });

  // *** Carga de archivos
  // public imagenSubir?: File;
  currentFile?: File;
  progress = 0;
  message = '';
  fileName = 'Selecciona imagen';
  fileInfos?: Observable<any>;

  constructor(
    private data: InfoService,
    private modals: ModalService,
    private fileUpload: FileUploadService,
    private modalImagen: ModalImagenService
  ) {}

  ngOnInit(): void {
    this.getPiso();
    this.getInstrucciones();
  }

  // *** Piso

  // todo: hacer un debounced save y quitar el botón de guardar. Establecer un botón de editar, eso sí, para hacer los campos disabled true/false
  // todo: validar campos de piso antes de enviar

  getPiso() {
    this.data.getPiso().subscribe({
      next: (pisoResp) => (this.piso = pisoResp.pisoItems),
      error: (err) => this.modals.openSnackBar(err),
      // complete: ()=> console.log(this.piso),
    });
  }

  setPiso() {
    this.data.setPiso(this.piso).subscribe({
      next: (piso) => {
        this.piso = piso;
        this.modals.openSnackBar(`Guardado con éxito`);
        this.getPiso();
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  addVideo(f: FormGroupDirective) {
    // this.pisoHasChanges = true;
    const formData = this.newVideo.value;
    this.piso.video.push({
      videoDescripcion: formData.nuevaDescripcion!,
      videoUrl: formData.nuevaUrl!,
    });
    f.resetForm();
    this.setPiso();
  }

  deleteVideo(index: number) {
    // this.pisoHasChanges = true;

    // this.modals
    //   .openDialog(
    //     '¿Desea eliminar el vídeo?',
    //     this.piso.video.at(index)?.videoDescripcion
    //   )
    //   .subscribe((confirmation) => {
    //     if (confirmation) {
    //       this.piso.video.splice(index, 1);
    //       this.setPiso();
    //     }
    //   });
  }

  showAddForm() {
    this.showForm = !this.showForm;
  }

  //  *** Instrucciones
  getInstrucciones() {
    this.data.getInstrucciones().subscribe({
      next: (instrucciones) => {
        // console.log({ instrucciones });
        this.aparatos = instrucciones.aparatos;
        // console.log(this.aparatos)
      },
      error: (err) => this.modals.openSnackBar(err),
    });
  }

  deleteAparato(element: Aparato) {
    this.data.deleteInstrucciones(element).subscribe({
      next: (resp) => {
        const indice = this.aparatos.indexOf(element);
        this.aparatos.splice(indice, 1);
        // this.table.renderRows();
        this.modals.openSnackBar(
          `Aparato eliminado correctamente: ${resp.instrucciones.aparato}`
        );
      },
      error: (err) => console.log(err),
    });
  }

  setNewDevice(f: FormGroupDirective) {
    const formData = this.newDevice.value;


    if (f.form.valid) {
      const sendDevice: Aparato = {
        aparato: formData.newAparato!,
        descripcion: formData.newDescripcion!,
        imagenes: formData.newImagenes!,
        video: formData.newVideo!,
      };

      this.data.setInstrucciones(sendDevice).subscribe({
        next: (resp) => {
          this.aparatos.push(resp.instrucciones);
          this.upload(resp.instrucciones.uid)
          // TODO: arreglar el renderizado de la tabla con la imagen correspondiente
          // * lo suyo es meter el archivo en el sendDevice, y trasladar la lógica de la carga de imagen al servicio correspondiente, aunque desde allí se llame al servicio concreto de manejo de imágenes.
          // this.table.renderRows();
          f.resetForm();
          this.modals.openSnackBar(
            `Aparato añadido con éxito: ${resp.instrucciones.aparato}`
          );
        },
        error: (err) => this.modals.openSnackBar(err),
      });
    }
  }

  // ! Hazlo todo lo más simple posible!!!!

  // *** Carga de archivos
  showImage(img:any) {
    console.log(img)
    this.modalImagen.abrirModal('hospitales','123',img)



  }
  // Selecciona el archivo y lo manda a currentfile
  selectFile(event: any): void {

    this.progress = 0;
    this.message = '';

    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  // TODO: necesito una peticion get para obtener las fotos del back??
  // * no, tengo que meterle un pipe personalizado para cargarla correctamente


  // TODO: tengo que seleccionar el archivo y al guardar cambios hacer primero la subida del archivo y después poner la ruta en el campo del form newImagenes y de ahi guardar en la bd el objeto completo
  // Después hacer un modal de carga de imágenes y poner más bonito el formulario
  // https://github.com/bezkoder/angular-material-17-file-upload
  // https://www.bezkoder.com/angular-material-17-file-upload/

  // sube el archivo y limpia
  upload(id:any) {
    if (this.currentFile) {

      this.fileUpload.actualizarFoto(this.currentFile, 'instrucciones', id).then(
        (resp)=>console.log(resp)

      )

    }
  }
}
