import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerAdminComponent } from './comer-admin.component';

describe('ComerAdminComponent', () => {
  let component: ComerAdminComponent;
  let fixture: ComponentFixture<ComerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComerAdminComponent]
    });
    fixture = TestBed.createComponent(ComerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
