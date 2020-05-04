import { Component, OnInit,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { MapListSvcService } from '../../services/map-list-svc.service';
import { TabComponent } from '../tab/tab.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TrainsSVCService } from 'src/app/services/trains-svc.service';

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

  items:any = [];
  fullMapList =[];
  fullTrainList =[];
  fullRouteList =[];
  mapList: MapListSvcService;
  trainList:TrainsSVCService;
  private onClick() {
    console.log('onClick');
  }
  
  itemClicked(item){
    //alert(`${id} clicked`);
    this.onItemClick.emit(item);
  }
  constructor(private _mapList:MapListSvcService, private _trainList:TrainsSVCService) { 
    this.mapList = _mapList;
    this.trainList = _trainList;
  }
  changed(searchText : HTMLInputElement){
    switch (searchText.id) {
      case "maplist":
        this.items = searchText ? this.performfilter(searchText.value,this.fullMapList):this.fullMapList;
        break;
      case "trainlist":
        this.items = searchText ? this.performfilter(searchText.value,this.fullTrainList):this.fullTrainList;
        break;
        case "routelist":
          this.items = searchText ? this.performfilter(searchText.value,this.fullRouteList):this.fullRouteList;
          break;
      default:
        break;
    }
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
        this.fullMapList = this.mapList.getMapList();
        this.items = this.fullMapList;
        break;
      case "trainlist":
        this.fullTrainList = this.trainList.getTrainList();
        this.items = this.fullTrainList;
      case "routelist":
        this.items.push({name:'route1'});
        this.fullRouteList = this.items;
      default:
        break;
    }
     
  }

}
