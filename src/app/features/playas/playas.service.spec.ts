/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayasService } from './playas.service';

describe('Service: Playas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayasService]
    });
  });

  it('should ...', inject([PlayasService], (service: PlayasService) => {
    expect(service).toBeTruthy();
  }));
});
