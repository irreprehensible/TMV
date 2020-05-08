import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './components/tabs/tabs.component';
import{ ContextMenuComponent } from './components/context-menu/context-menu.component';

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
  // @ViewChild(ContextMenuComponent) contextMenuTemplate;
  @ViewChild(TabsComponent) tabsComponent;
  showContextMenu:boolean
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
    console.log('[appcomponent]',eventObj);
    // let ctxObj={
    //   eventObj:eventObj,
    //   showContextMenu:this.showContextMenu
    // }
    // this.contextMenuTemplate.activate(ctxObj);
  }
  private hideMenu(){
    this.showContextMenu=false;
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

