import { Component, OnInit } from '@angular/core';
import { Turismo } from 'src/app/shared/interfaces/info.interface';
import { TurismoService } from '../../turismo.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css']
})
export class TurismoComponent  implements OnInit {
  public turismo: Turismo[] = []

  constructor(private data: TurismoService){}

  ngOnInit(): void {
    this.data.getTurismo().subscribe(resp => this.turismo = resp)

  }

}
