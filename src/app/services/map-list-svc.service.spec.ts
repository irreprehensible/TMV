import { TestBed } from '@angular/core/testing';

import { MapListSvcService, map } from './map-list-svc.service';

describe('MapListSvcService', () => {
  let service: MapListSvcService;
  let m:map [] =[
    {id:1,name:'map1',desc:'map1 descrio'},
    {id:2,name:'map2',desc:'map2 descrio'},
    {id:3,name:'map3',desc:'map3 descrio'}
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapListSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get te map list',() =>{
    service.getMapList().then(data => {
      expect(data).toEqual(m)
    });
    
  })
});
