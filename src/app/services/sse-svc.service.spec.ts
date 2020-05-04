import { TestBed } from '@angular/core/testing';

import { SseSVCService } from './sse-svc.service';

describe('SseSVCService', () => {
  let service: SseSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SseSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
