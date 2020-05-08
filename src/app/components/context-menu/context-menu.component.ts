import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent{

  @Input() x = 0;
  @Input() y = 0;
  @Input() eventObj:any;
  @Output() openClick = new EventEmitter();
  showContextMenu:boolean;

  onOpenClick(){
    console.log('[cm comp.]',this.eventObj);
    let obj ={
      type: this.eventObj.event.path[4].attributes[3].value, //this is a BUG!!!!!!!!!!!!!!!
      item:this.eventObj.item
    }
    this.openClick.emit(obj);
  }
}
