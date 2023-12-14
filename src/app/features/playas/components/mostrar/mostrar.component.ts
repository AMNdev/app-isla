import { Component, OnInit } from '@angular/core';
import { PlayasService } from '../../playas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Playas } from 'src/app/shared/interfaces/playas.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
})
export class MostrarComponent implements OnInit {
  public playa!: Playas;

  constructor(
    private data: PlayasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.data.getPlayaById(id)))
      .subscribe((playa) => {
        if (!playa) return this.router.navigateByUrl('./');
        this.playa = playa;
        return;
      });
  }
}
