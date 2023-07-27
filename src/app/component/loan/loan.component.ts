import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {

  constructor(private loanService:LoanService,private router:Router){}

 loanData={

loanCategory:'',
loanAmount:'',
duration:'',
address:'',
occupation:'',
firstName:'',
lastName:'',
interestRate:'',
emailId:'',
phoneNo:'',
status:''
}

applyloan(){
  alert("applied")
  console.log(this.loanData);
  this.loanService.createNewLoan(this.loanData).subscribe((data)=>{
    
    console.log("post data: ",data.value);
    

  },
  (error)=>{
    console.log(error);
  })

}

}
