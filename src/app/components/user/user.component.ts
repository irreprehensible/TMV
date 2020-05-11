import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  showUserNav:boolean = false;
  userAvatar = '../assets/user.gif'
  @ViewChild('userMnu') userMnu:ElementRef
  @HostListener('window:click', ['$event.target'])
  onClick(targetElement:HTMLElement) {
    if(!targetElement.classList.contains('user') && this.userMnu.nativeElement.classList.contains('show'))
      this.toggleUserNav();
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key=='Escape' && this.showUserNav)
      this.showUserNav=false;
  }
  toggleUserNav(){
    this.showUserNav = !this.showUserNav;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
