import { Component, OnInit,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { MapListSvcService } from '../../services/map-list-svc.service';
import { TabComponent } from '../tab/tab.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TrainsSVCService } from '../../services/trains-svc.service';
import { RouteSVCService } from '../../services/route-svc.service';
import { UserSVCService } from 'src/app/services/user-svc.service';

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
  mapList: MapListSvcService;
  trainList:TrainsSVCService;
  routelist:RouteSVCService;
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
  constructor(private _mapList:MapListSvcService, private _trainList:TrainsSVCService, private _routelist:RouteSVCService, private _userSVC:UserSVCService) { 
    this.mapList = _mapList;
    this.trainList = _trainList;
    this.routelist = _routelist;
    this.userSVC = _userSVC;
  }
  changed(searchText : HTMLInputElement){
      this.items = searchText ? this.performfilter(searchText.value,this.fullitemList):this.fullitemList;
     // console.log(e.path[0].id);
  }
  performfilter = function (searchtext:string,FullList) {
      let filterby = searchtext.toLocaleLowerCase();
      return FullList.filter(function (item) {
        console.log(item)
          return item.name.toLocaleLowerCase().indexOf(filterby) != -1;
      });
  }
  ngOnInit(): void {
    switch (this.type) {
      case "maplist":
        this.fullitemList = this.mapList.getMapList();
        this.items = this.fullitemList;
        break;
      case "trainlist":
        this.fullitemList = this.trainList.getTrainList();
        this.items = this.fullitemList;
        break;
      case "routelist":
        this.fullitemList = this.routelist.getRouteList();
        this.items = this.fullitemList;
        break;
      case "userlist":
        this.fullitemList = this.userSVC.getUserOptionList();
        this.items = this.fullitemList;
      default:
        break;
    }
     
  }

}
