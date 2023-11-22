import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayasAdminComponent } from './playas-admin.component';

describe('PlayasAdminComponent', () => {
  let component: PlayasAdminComponent;
  let fixture: ComponentFixture<PlayasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayasAdminComponent]
    });
    fixture = TestBed.createComponent(PlayasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
