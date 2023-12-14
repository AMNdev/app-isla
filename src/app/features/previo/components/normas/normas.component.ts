import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrevioService } from '../../previo.service';

@Component({
  selector: 'app-normas',
  templateUrl: './normas.component.html',
  styleUrls: ['./normas.component.css'],
})
export class NormasComponent implements OnInit {
  public normas!: string[];

  constructor(private data: PrevioService, private router: Router) {}

  ngOnInit() {
    this.data.getNormas().subscribe((normas) => {
      if (!normas) return this.router.navigateByUrl('./');
      this.normas = normas;
      return;
    });
  }
}
