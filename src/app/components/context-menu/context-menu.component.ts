import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  @Input() x = 0;
  @Input() y = 0;
  @Input() eventObj:any;
  showContextMenu:boolean;
  @Input() dataContext;
  @Input() template;
  
  constructor() { 
    console.log('[cm comp.]',this.eventObj);
  }
  activate(ctxObj){
    // this.showContextMenu = ctxObj.showContextMenu;
    // this.x = ctxObj.eventObj.clientX;
    // this.y = ctxObj.eventObj.clientY;
  }
  ngOnInit(): void {
  }

}
