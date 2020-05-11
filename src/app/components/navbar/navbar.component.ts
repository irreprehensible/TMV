import { Component, OnInit} from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { UserComponent } from '../user/user.component'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host:{'(click)':'hideMenu()'}
})
export class NavbarComponent implements OnInit {

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
  constructor() { }
  
  ngOnInit(): void {
  }
}
