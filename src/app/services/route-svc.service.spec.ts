import { TestBed } from '@angular/core/testing';

import { RouteSVCService } from './route-svc.service';

describe('RouteSVCService', () => {
  let service: RouteSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
