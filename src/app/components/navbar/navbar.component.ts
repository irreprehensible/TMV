import { Component, OnInit, ViewChild} from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { UserComponent } from '../user/user.component'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host:{'(click)':'hideMenu()'}
})
export class NavbarComponent implements OnInit {
  @ViewChild(ModalComponent) modalComponent
  @ViewChild('profile') profileTemplate
  navbarOpen:boolean;
  brand ="TMV";
  userNavOpen:boolean;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  toggleUserNav(){
    this.userNavOpen = !this.userNavOpen;
  }
  private hideMenu(){
    // if(this.navbarOpen)
    // this.navbarOpen=false;
    // if(this.userNavOpen)
    // this.userNavOpen=false;
  }
  opnenKey(){
    this.modalComponent.showModal(this.profileTemplate, null);
  }
  constructor() { }
  
  ngOnInit(): void {
  }
}
