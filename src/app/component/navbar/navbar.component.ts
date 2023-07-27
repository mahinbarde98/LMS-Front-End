import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router, public userService:UserService){}

  public isLoggedIn(){
    return this.userService.isLoggedIn();
  }
  public logout(){
    //console.log("inside logout");
    this.userService.clear();
 
    this.router.navigate(['/login']);
  }

}
