import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  apiLogin = `http://localhost:8080/authenticate`;

  
  
  login(data:any)
  {
    return this.http.post<any>(`${this.apiLogin}`,data);
  }
}
