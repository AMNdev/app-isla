import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {
  @Input()
  videoUrl!: string;

  constructor() { }

  ngOnInit() {
  }

}
