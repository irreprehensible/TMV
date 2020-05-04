import { TestBed } from '@angular/core/testing';

import { TimeSVCService } from './time-svc.service';

describe('TimeSVCService', () => {
  let service: TimeSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
