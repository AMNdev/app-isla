import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayasComponent } from './playas.component';

describe('PlayasComponent', () => {
  let component: PlayasComponent;
  let fixture: ComponentFixture<PlayasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayasComponent]
    });
    fixture = TestBed.createComponent(PlayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
