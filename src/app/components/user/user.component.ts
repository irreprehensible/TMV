import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { UserSVCService, user } from 'src/app/services/user-svc.service';
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  showUserNav:boolean = false;
  userObj:user = null;
  userSVC:UserSVCService
  constructor(private _userSVC:UserSVCService) { 
    this.userSVC = _userSVC 
    
  }
  @ViewChild('userMnu') userMnu:ElementRef
  @ViewChild('profile') profileTemplate
  @ViewChild(ModalComponent) modalComponent;
  @HostListener('window:click', ['$event.target'])
  onClick(targetElement:HTMLElement) {
    if(this.userMnu){
    if(!targetElement.classList.contains('user') && this.userMnu.nativeElement.classList.contains('show'))
      this.toggleUserNav();
    }
    else
      alert('User not logged in!')
  }
  toggleUserNav(){
    this.showUserNav = !this.showUserNav;
  }
  showProfile(){
    // console.log('user template',this.profileTemplate)
    //refer to the store to get the complete user obj
    this.modalComponent.showModal(this.profileTemplate, this.userObj);
  }

  ngOnInit(): void {
    this.userSVC.getUser().then(u=>{
      this.userObj = u
    })
    .catch(err => console.log('error for user'))
  }

}
