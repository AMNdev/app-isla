import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoAdminComponent } from './turismo-admin.component';

describe('TurismoAdminComponent', () => {
  let component: TurismoAdminComponent;
  let fixture: ComponentFixture<TurismoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurismoAdminComponent]
    });
    fixture = TestBed.createComponent(TurismoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
