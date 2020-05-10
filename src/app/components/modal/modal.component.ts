import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showModalPopUp:boolean

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    //console.log('[key event modal]',event);
    if(event.key=='Escape' && this.showModalPopUp)
      this.showModalPopUp=false;
  }
  hideModal(){
    this.showModalPopUp=false
  }
}
