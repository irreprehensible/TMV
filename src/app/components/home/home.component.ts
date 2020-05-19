import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { TabsComponent } from '../tabs/tabs.component';
import { constants } from "../../common/constants";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { MapListSvcService } from 'src/app/services/map-list-svc.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{'(click)':'hideMenu()'}
})
export class HomeComponent implements OnInit,AfterViewInit {
  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild('about') aboutTemplate;
  @ViewChild('map') mapTemplate;
  @ViewChild('train') trainTemplate;
  @ViewChild('route') routeTemplate
  @ViewChild(TabsComponent) tabsComponent;
  @ViewChild(ModalComponent) modalComponent;
  maptype:string = constants.MAP;
  traintype:string = constants.TRAIN;
  routetype:string = constants.ROUTE;
  locationtype:string = constants.LOCATION;
  usertype:string = constants.USER;
  showContextMenu:boolean;
  showModalPopUp:boolean;
  eventObj:any
  xPosTabMenu: Number;
  yPosTabMenu: Number;
  title = 'mapRoutes';
  likeLoad={
    isLiked:false,
    likeCount:0
  };
  
  incrLike(isLiked){
    console.log('liked',isLiked);
    if(isLiked) this.likeLoad.likeCount++;
    else this.likeLoad.likeCount--;
  }

  showMenu(eventObj){
    this.eventObj = eventObj;
    this.xPosTabMenu = eventObj.event.clientX;
    this.yPosTabMenu = eventObj.event.clientY;
    if(eventObj)
    this.showContextMenu=true
    //console.log('[appcomponent]',eventObj);
  }
  onModalClick(openObj){
    console.log('[modalclick]',openObj);
    switch (openObj.type) {
      case constants.MAP:
          this.modalComponent.showModal(this.mapTemplate, openObj.item);
        break;
        case constants.TRAIN:
          this.modalComponent.showModal(this.trainTemplate, openObj.item);
        break;
        case constants.ROUTE:
          this.modalComponent.showModal(this.routeTemplate, openObj.item);
        break;
      default:
        break;
    }
    
    // if(openObj)
    //   this.showModalPopUp=true
  }
  private hideMenu(){
    this.showContextMenu=false;
  }
  onTabClick(openObj){
    console.log('[openclick]',openObj);
    this._route.navigate([openObj.type,openObj.item.id])
    // switch (openObj.type) {
    //   case constants.MAP:
    //       this.onOpenMap(openObj.item);
    //     break;
    //     case constants.TRAIN:
    //       this.onOpenTrain(openObj.item);
    //     break;
    //     case constants.ROUTE:
    //       this.onOpenRoute(openObj.item);
    //     break;
    //   default:
    //     break;
    // }
  }
  onOpenMap(obj){
    let icon = 'fa fa-map'
    this.tabsComponent.openTab(`${obj.name}`, this.mapTemplate, obj, true, icon);
  }
  onOpenTrain(obj){
    let icon='fa fa-train'
    this.tabsComponent.openTab(`${obj.name}`,this.trainTemplate,obj,true,icon);
  }
  onOpenRoute(obj){
    let icon='fas fa-route'
    this.tabsComponent.openTab(`${obj.name}`,this.routeTemplate,obj,true,icon);
  }
  constructor(private _router:ActivatedRoute, private _route:Router, private _maplist:MapListSvcService){}


  ngAfterViewInit(): void {
    this._router.paramMap.subscribe((params:ParamMap) =>{
      console.log(this._route.url.split('/')[1]);
      console.log(params)
      switch (this._route.url.split('/')[1]) {
        case constants.MAP:
          this._maplist.getMapById(this._route.url.split('/')[2]).then(result =>{
          let obj = result;
            setTimeout(() => {
              this.onOpenMap(obj)
            }, 1000);
          })
          break;
        case constants.TRAIN:
          let obj = {id:this._route.url.split('/')[2],name:`train${this._route.url.split('/')[2]}`}
          setTimeout(() => {
            this.onOpenTrain(obj)
          }, 1000);
        case constants.ROUTE:
          let rou = {id:this._route.url.split('/')[2],name:`route${this._route.url.split('/')[2]}`}
          setTimeout(() => {
            this.onOpenRoute(rou)
          }, 1000);
        default:
          break;
      }
    })
  }
  ngOnInit(){
    //console.log(this._route.url);
  }
}
