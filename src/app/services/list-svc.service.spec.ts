import { TestBed } from '@angular/core/testing';

import { ListSVCService } from './list-svc.service';

describe('ListSVCService', () => {
  let service: ListSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
