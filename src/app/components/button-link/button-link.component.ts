import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TrainsSVCService, train } from 'src/app/services/trains-svc.service';

@Component({
  selector: 'button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {
  @ViewChild('btnMnu') btnMnu:ElementRef
  @Input() icon:string
  @Input() title:string
  @Input() type:string
  showBtn:boolean
  subMnu:boolean
  subMnuId:any =''
  listItems
  @HostListener('window:click', ['$event.target'])
  onClick(targetElement:HTMLElement) {
    // console.log(targetElement)
    
    if(!targetElement.classList.contains('button-link') && !targetElement.classList.contains('button-link-sub') ){
      this.showBtn=false
      this.subMnuId='';
    }
  }
  constructor(private _trainSVC:TrainsSVCService) { }
  toggleUserNav(event){
    //console.log(event.target.classList.value.indexOf('button-link-sub'))
    if(event.target.classList.value.indexOf('button-link-sub')<0)
    this.showBtn = !this.showBtn;
  }
  showSubmenu(event,item){
    this.subMnuId=item.id;
    console.log(event);
  }
  subMenuAction(){
    this.subMnuId='';
    console.log('submenu action')
  }
  ngOnInit(): void {
    this._trainSVC.getTrainList().then(trains => this.listItems=trains)
  }

}
