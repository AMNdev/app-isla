import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevioAdminComponent } from './previo-admin.component';

describe('PrevioAdminComponent', () => {
  let component: PrevioAdminComponent;
  let fixture: ComponentFixture<PrevioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevioAdminComponent]
    });
    fixture = TestBed.createComponent(PrevioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
