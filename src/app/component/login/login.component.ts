import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { user } from './user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private userService : UserService,private loginService: LoginService){}


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  private userObj:user = new user();



 login(){
  alert("logged in");
 // this.userObj.username.setValue(this.loginForm.email.value));
  console.log(this.loginForm.value);

  this.loginService.login(this.loginForm.value).subscribe((result)=>{
   
      
      console.log(result);
      console.log(result)
       console.log("token : ",result.jwtToken)
       console.log("role : ",(result.role[0]))

       this.userService.setRoles((result.role[0]));
       this.userService.setToken(result.jwtToken);
      //  console.log("token from storage : " , this.userService.getToken())
       this.router.navigate(['home'])

      //  const role = (result.role[0]);
      //  if(role==='admin' || 'user'){
      //    this.router.navigate(['home']);}

    
  },(error:any)=>{

      console.log(error);
    }
  )
 }

  
}



