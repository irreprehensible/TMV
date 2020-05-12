import { Component, ViewChild, HostListener } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host:{'(click)':'hideMenu()'}
})
export class AppComponent {
  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild('about') aboutTemplate;
  @ViewChild('map') mapTemplate;
  @ViewChild('train') trainTemplate;
  @ViewChild('route') routeTemplate
  @ViewChild(TabsComponent) tabsComponent;
  @ViewChild(ModalComponent) modalComponent;
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
      case "maplist":
          this.modalComponent.showModal(this.mapTemplate, openObj.item);
        break;
        case "trainlist":
          this.modalComponent.showModal(this.trainTemplate, openObj.item);
        break;
        case "routelist":
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
    switch (openObj.type) {
      case "maplist":
          this.onOpenMap(openObj.item);
        break;
        case "trainlist":
          this.onOpenTrain(openObj.item);
        break;
        case "routelist":
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

