import { TestBed } from '@angular/core/testing';

import { DataSVCService } from './data-svc.service';

describe('DataSVCService', () => {
  let service: DataSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
