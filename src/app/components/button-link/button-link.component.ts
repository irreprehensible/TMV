import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TrainsSVCService, train } from 'src/app/services/trains-svc.service';
import{ ButtonSubMenuComponent } from './button-sub-menu/button-sub-menu.component'
import { constants } from "../../common/constants";
import { ListSVCService } from 'src/app/services/list-svc.service';

@Component({
  selector: 'button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {
  @ViewChild('btnMnu') btnMnuEl:ElementRef
  @ViewChild('subMnu') subMnuEl:ElementRef
  @Input() icon:string
  @Input() title:string
  @Input() type:string
  showBtnMnu:boolean
  showSubMnu:boolean
  subMnuId:any =''
  listItems
  @HostListener('window:click', ['$event.target'])
  onClick(targetElement:HTMLElement) {
    // console.log(targetElement)
    if(!targetElement.classList.contains('button-link') && !targetElement.classList.contains('button-link-sub') ){
      this.showBtnMnu=false
      this.subMnuId='';
    }
  }
  constructor(private _listSVC:ListSVCService) { }
  toggleBtnMenu(event){
    //console.log(event.target.classList.value.indexOf('button-link-sub'))
    if(event.target.classList.value.indexOf('button-link-sub')<0)
    this.showBtnMnu = !this.showBtnMnu;
  }
  showSubmenu(item){
    this.subMnuId=item.id;
    // let el:HTMLElement = this.subMnuEl.nativeElement
    //console.log(el);
    //get data
    // el.innerHTML = `${item.id} links`
  }
  subMenuAction(){
    this.subMnuId='';
    console.log('submenu action from button-link')
  }
  ngOnInit(): void {
    this._listSVC.getLocationList().then(locations => this.listItems=locations)
  }

}
