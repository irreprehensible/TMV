import { Component, OnInit,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { MapListSvcService } from '../../services/map-list-svc.service';
import { TabComponent } from '../tab/tab.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TrainsSVCService } from '../../services/trains-svc.service';
import { RouteSVCService } from '../../services/route-svc.service';
import { UserSVCService } from 'src/app/services/user-svc.service';
import { LocationSVCService } from 'src/app/services/location-svc.service';
import { constants } from "../../common/constants";

@Component({
  selector: 'home-link',
  templateUrl: './home-link.component.html',
  styleUrls: ['./home-link.component.css'],
  host:{'(click)':'onClick()'}
})
export class HomeLinkComponent implements OnInit {
 @Input('titleHead') titleHead:string;
 @Input('icon') icon:string;
 @Input('type') type:string;
 @Output() onItemClick = new EventEmitter();
 @Output() onItemRightClick = new EventEmitter();

  items:any = [];
  fullitemList =[];
  notFoundMsg:string="";
  mapList: MapListSvcService;
  trainList:TrainsSVCService;
  routeList:RouteSVCService;
  locationList:LocationSVCService;
  userSVC:UserSVCService;
  private onClick() {
    //console.log('onClick');
  }
  itemRightClicked(e,item){
    let eventObj ={
      event:e,
      item:item
    }
    //console.log('[right clicked home link] item:',item)
    //console.log(e.clientX+','+e.clientY);
    this.onItemRightClick.emit(eventObj);
    return false;
  }
  itemClicked(item){
    //alert(`${id} clicked`);
    this.onItemClick.emit(item);
  }
  constructor(private _mapList:MapListSvcService, private _trainList:TrainsSVCService, private _routeList:RouteSVCService, private _userSVC:UserSVCService, private _locationList:LocationSVCService) { 
    this.mapList = _mapList;
    this.trainList = _trainList;
    this.routeList = _routeList;
    this.locationList=_locationList;
    this.userSVC = _userSVC;
  }
  changed(searchText : HTMLInputElement){
      this.items = searchText ? this.performfilter(searchText.value,this.fullitemList):this.fullitemList;
     // console.log(e.path[0].id);
  }
  performfilter = function (searchtext:string,FullList) {
      let filterby = searchtext.toLocaleLowerCase();
      return FullList.filter(function (item) {
          return item.name.toLocaleLowerCase().indexOf(filterby) != -1;
      });
  }
  async getLocations(){
    const locations = await this.locationList.getLocationList().catch(err=>{
      this.notFoundMsg=err.message;
      console.log('no locations!',err.message)
       return
    });
    //wait for locations to appear
    if(locations){
      this.fullitemList = locations
      this.items = this.fullitemList
    }
  }
  ngOnInit(): void {
    switch (this.type) {
      case constants.MAP:
        this.mapList.getMapList().then(maps => {
          this.fullitemList = maps
          this.items = this.fullitemList;
        }).catch(err => {
          this.notFoundMsg='no maps found'
          console.log('no maps!',err)
        })
        
        break;
      case constants.TRAIN:
        this.trainList.getTrainList().then(trains => {
          this.fullitemList = trains
          this.items = this.fullitemList;
        }).catch(err => {
          this.notFoundMsg='no trains found'
          console.log('no trains!',err)
        })
        break;
      case constants.ROUTE:
        this.routeList.getRouteList().then(routes => {
          this.fullitemList = routes
          this.items = this.fullitemList;
        }).catch(err => {
          this.notFoundMsg='no routes found'
          console.log('no routes!',err)
        })
        break;
      case constants.LOCATION:
        this.getLocations();
        // this.locationList.getLocationList().then(locations => {
        //   this.fullitemList = locations
        //   this.items = this.fullitemList;
        // }).catch(err => {
        //   this.notFoundMsg=err.message;
        //   console.log('no locations!',err.message)
        // })
        break;
      case constants.USER:
        this.fullitemList = this.userSVC.getUserOptionList();
        this.items = this.fullitemList;
      default:
        break;
    }
     
  }

}
