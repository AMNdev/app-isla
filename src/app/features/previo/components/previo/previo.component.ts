import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Localizacion } from 'src/app/shared/interfaces/previo.interface';
import { PrevioService } from '../../previo.service';

@Component({
  selector: 'app-previo',
  templateUrl: './previo.component.html',
  styleUrls: ['./previo.component.css'],
})
export class PrevioComponent {
  public direcciones!: Localizacion[];
  public normas!: string[];

  constructor(private data: PrevioService, private router: Router) {}

  ngOnInit() {
    this.data.getDirecciones().subscribe((direcciones) => {
      if (!direcciones) return this.router.navigateByUrl('./');
      this.direcciones = direcciones;
      return;
    });
    this.data.getNormas().subscribe((normas) => {
      if (!normas) return this.router.navigateByUrl('./');
      // this.normas = normas;
      // fixme: arreglar la recepcion de las normas y mostrar correctamente
      return;
    });
  }
}
