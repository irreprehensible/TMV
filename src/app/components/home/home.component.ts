import { Component, ViewChild, HostListener } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { TabsComponent } from '../tabs/tabs.component';
import { constants } from "../../common/constants";
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{'(click)':'hideMenu()'}
})
export class HomeComponent{
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

  showMenu(eventObj){
    this.eventObj = eventObj;
    this.xPosTabMenu = eventObj.event.clientX;
    this.yPosTabMenu = eventObj.event.clientY;
    if(eventObj)
    this.showContextMenu=true
    //console.log('[appcomponent]',eventObj);
  }
  onModalClick(openObj){
    //console.log('[modalclick]',openObj);
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
  }
  private hideMenu(){
    this.showContextMenu=false;
  }
  onTabClick(openObj){
    console.log('[openclick]',openObj);
    switch (openObj.type) {
      case constants.MAP:
          this.onOpenMap(openObj.item);
        break;
        case constants.TRAIN:
          this.onOpenTrain(openObj.item);
        break;
        case constants.ROUTE:
          this.onOpenRoute(openObj.item);
        break;
      default:
        break;
    }
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

}
