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
  listItems
  @HostListener('window:click', ['$event.target'])
  onClick(targetElement:HTMLElement) {
    if(!targetElement.classList.contains('button-link') )
      this.showBtn=false
  }
  constructor(private _trainSVC:TrainsSVCService) { }
  toggleUserNav(){
    this.showBtn = !this.showBtn;
  }

  ngOnInit(): void {
    this._trainSVC.getTrainList().then(trains => this.listItems=trains)
  }

}
