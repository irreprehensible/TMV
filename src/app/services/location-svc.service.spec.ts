import { TestBed } from '@angular/core/testing';

import { LocationSVCService } from './location-svc.service';

describe('LocationSVCService', () => {
  let service: LocationSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
