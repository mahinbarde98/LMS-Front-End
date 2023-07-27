import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

  apiLoan='http://localhost:8080/lms/addLoan';
  getApi='http://localhost:8080/lms/all';
  getbyidApi ='http://localhost:8080/lms/findById';
  putApi = 'http://localhost:8080/lms/updateLoan';

  createNewLoan(data:any)
  {
    return this.http.post<any>(`${this.apiLoan}`,data);
  }

  getLoan(){
    return this.http.get<any>(`${this.getApi}`);
  }

  getById(id:any){
    return this.http.get<any>(`${this.getbyidApi}/${id}`);
  }

  updateLoan(id:any,loan:any){
    return this.http.put<any>(`${this.putApi}/${id}`,loan);
  }
}
