import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosAdminComponent } from './otros-admin.component';

describe('OtrosAdminComponent', () => {
  let component: OtrosAdminComponent;
  let fixture: ComponentFixture<OtrosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosAdminComponent]
    });
    fixture = TestBed.createComponent(OtrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
