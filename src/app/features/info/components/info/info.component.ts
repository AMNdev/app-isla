import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { tap } from 'rxjs';
import { Info } from 'src/app/shared/interfaces/info.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  public info: Info[] = [];

  constructor(private data: InfoService) {}

  ngOnInit(): void {
    this.data.getInfoList().subscribe((list) => (this.info = list));
  }
}
