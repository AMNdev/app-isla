import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerComponent } from './comer.component';

describe('ComerComponent', () => {
  let component: ComerComponent;
  let fixture: ComponentFixture<ComerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComerComponent]
    });
    fixture = TestBed.createComponent(ComerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
