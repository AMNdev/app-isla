import { Component, OnInit } from '@angular/core';
import { PrevioService } from '../../previo.service';
import { Router } from '@angular/router';
import { Localizacion } from 'src/app/shared/interfaces/previo.interface';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {
  public direcciones!: Localizacion[]

  constructor(
    private data: PrevioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.getDirecciones()
      .subscribe((direcciones) => {
        if (!direcciones) return this.router.navigateByUrl('./');
        this.direcciones = direcciones;
        return;
      });
  }
}
