import { Component, OnInit } from '@angular/core';
import { TurismoService } from '../../turismo.service';
import { Turismo } from 'src/app/shared/interfaces/turismo.interface';
import { GetTurismo } from '../../../../shared/interfaces/turismo.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css']
})
export class TurismoComponent  implements OnInit {
  public turismo: Turismo[] = []

  constructor(private data: TurismoService){}

  ngOnInit(): void {
    // this.data.getTurismo().subscribe(resp => this.turismo = resp)

    this.getTurismo()
    console.log('turismo component')


  }

  getTurismo(){
    this.data.getTurismo().subscribe({
      next: (resp) => {
        console.log(resp);
        this.turismo= resp.turismoItems
      },
      error: (err) => console.log(err)


    })
  }
}
