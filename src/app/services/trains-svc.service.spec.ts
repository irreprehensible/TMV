import { TestBed } from '@angular/core/testing';

import { TrainsSVCService } from './trains-svc.service';

describe('TrainsSVCService', () => {
  let service: TrainsSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainsSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
