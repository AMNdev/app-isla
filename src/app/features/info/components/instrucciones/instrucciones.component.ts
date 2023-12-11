import { Component, OnInit } from '@angular/core';
import { Instrucciones } from 'src/app/shared/interfaces/info.interface';
import { InfoService } from '../../info.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css'],
})
export class InstruccionesComponent implements OnInit {
  public instrucciones!: Instrucciones;

  constructor(private data: InfoService) {}

  ngOnInit() {
    this.data
      .getInstrucciones()
      .subscribe((resp) => (this.instrucciones = resp));
  }
}
