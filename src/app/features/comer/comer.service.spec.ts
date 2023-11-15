/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComerService } from './comer.service';

describe('Service: Comer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComerService]
    });
  });

  it('should ...', inject([ComerService], (service: ComerService) => {
    expect(service).toBeTruthy();
  }));
});
