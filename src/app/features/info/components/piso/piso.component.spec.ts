/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PisoComponent } from './piso.component';

describe('PisoComponent', () => {
  let component: PisoComponent;
  let fixture: ComponentFixture<PisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
