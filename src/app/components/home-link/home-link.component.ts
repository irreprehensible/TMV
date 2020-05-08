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
  fullitemList =[];
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
      case "routelist":
        this.items.push({name:'route1'});
        this.fullitemList = this.items;
      default:
        break;
    }
     
  }

}
