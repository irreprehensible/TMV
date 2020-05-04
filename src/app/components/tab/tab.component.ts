import { Component, Input } from '@angular/core';
//import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent{
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseable = true;
  @Input() template;
  @Input() dataContext;
  @Input() icon:string;
  
  // constructor(tabs:TabsComponent) {
  //   tabs.addTab(this);
  // }

}
