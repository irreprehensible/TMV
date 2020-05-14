import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { UserSVCService, user } from 'src/app/services/user-svc.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  showUserNav:boolean = false;
  userObj:user
  userSVC
  constructor(private _userSVC:UserSVCService) { 
    this.userSVC = _userSVC 
    
  }
  @ViewChild('userMnu') userMnu:ElementRef
  @HostListener('window:click', ['$event.target'])
  onClick(targetElement:HTMLElement) {
    if(!targetElement.classList.contains('user') && this.userMnu.nativeElement.classList.contains('show'))
      this.toggleUserNav();
  }
  toggleUserNav(){
    this.showUserNav = !this.showUserNav;
  }

  ngOnInit(): void {
    this.userObj = this.userSVC.getUser()
  }

}
