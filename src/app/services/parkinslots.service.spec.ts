import { TestBed } from '@angular/core/testing';

import { ParkinslotsService } from './parkinslots.service';

describe('ParkinslotsService', () => {
  let service: ParkinslotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkinslotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
