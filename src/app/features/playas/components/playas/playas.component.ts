import { Component, OnInit } from '@angular/core';
import { Playas } from 'src/app/shared/interfaces/playas.interface';
import { PlayasService } from '../../playas.service';

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css'],
})
export class PlayasComponent implements OnInit {
  public playas: Playas[] = [];

  constructor(private data: PlayasService) {}

  ngOnInit(): void {
    console.log('playas component onInit');

    this.data.getPlayas().subscribe((resp) => (this.playas = resp));

    
  }
}
