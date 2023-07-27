import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public setRoles(role:any){
    localStorage.setItem('role', role);
  }

  public getRoles():any {
    return (localStorage.getItem('role'));
  }

  public setToken(jwtToken:any){
    localStorage.setItem('jwtToken',jwtToken);
  }
  public getToken(): any {
    return localStorage.getItem('jwtToken')  ;
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }

  public roleMatch(allowedRoles: any): boolean {

    let activeRole = allowedRoles
    let userRoles = this.getRoles();
    if (userRoles === activeRole) {
      console.log(allowedRoles);
      return true
    }

    return false;

  }
}
