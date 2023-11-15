import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevioComponent } from './previo.component';

describe('PrevioComponent', () => {
  let component: PrevioComponent;
  let fixture: ComponentFixture<PrevioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevioComponent]
    });
    fixture = TestBed.createComponent(PrevioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
