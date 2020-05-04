import { TestBed } from '@angular/core/testing';

import { MapListSvcService } from './map-list-svc.service';

describe('MapListSvcService', () => {
  let service: MapListSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapListSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
