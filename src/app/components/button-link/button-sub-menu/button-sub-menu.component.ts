import { Component, OnInit, Input } from '@angular/core';
import { TrainsSVCService } from 'src/app/services/trains-svc.service';
import { constants } from "../../../common/constants";
@Component({
  selector: 'button-sub-menu',
  templateUrl: './button-sub-menu.component.html',
  styleUrls: ['./button-sub-menu.component.css']
})
export class ButtonSubMenuComponent implements OnInit {
  @Input() type:string
  @Input() itemId:any
  itemList
  constructor(private _trainSVC:TrainsSVCService) { }
  subMenuAction(item){
    console.log('submenu action from sub menu',item)
  }
  ngOnInit(): void {
    switch (this.type) {
      case constants.TRAIN:
        this._trainSVC.getTrainsByLocation(this.itemId).then(items => this.itemList = items)
        break;
    
      default:
        break;
    }
    
  }

}
