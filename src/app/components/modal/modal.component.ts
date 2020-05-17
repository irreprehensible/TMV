import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  showModalPopUp:boolean
  template;
  dataContext;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log('[key event modal]',event);
    if(event.key=='Escape' && this.showModalPopUp)
      this.showModalPopUp=false;
  }
  showModal(template,openObj){
    this.showModalPopUp =true
    this.template = template;
    this.dataContext = openObj;
    // console.log('modal!',openObj)
  }
  public hideModal(){
    this.showModalPopUp=false
  }
}
