import { TestBed } from '@angular/core/testing';

import { UserSVCService } from './user-svc.service';

describe('UserSVCService', () => {
  let service: UserSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
