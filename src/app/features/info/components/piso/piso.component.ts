import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Piso } from 'src/app/shared/interfaces/info.interface';

@Component({
  selector: 'app-piso',
  templateUrl: './piso.component.html',
  styleUrls: ['./piso.component.css'],
})
export class PisoComponent implements OnInit {
  public piso!: Piso;

  constructor(private data: InfoService) {}

  ngOnInit() {
    this.data.getPiso().subscribe((resp) => (this.piso = resp));
  }
}
