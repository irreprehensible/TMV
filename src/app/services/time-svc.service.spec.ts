import { TestBed } from '@angular/core/testing';
import { timeData } from "./timeData.json";
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
  fit('should get time data',async ()=>{
    const result = await service.getGMT()
    expect(result).toBeDefined();
  })
});
