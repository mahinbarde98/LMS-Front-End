import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  loan1:any
  userData:any;
  searchText:any;
  customerData: any =FormGroup;
loanId:any;

  constructor(private loanService:LoanService,private fb :FormBuilder){
    this.allLoan();
  }

  // updateForm = new FormGroup({
  //   lioan_Id: new FormControl(''),
  //   frstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   status: new FormControl(''),
  //   emailId: new FormControl(''),
  //   address: new FormControl(''),
  //   phoneNo: new FormControl(''),
  //   duration: new FormControl(''),
  //   occupation: new FormControl(''),
  //   loanAmount: new FormControl(''),
  //   loanCategory:new FormControl(''),
  //   interestRate: new FormControl(''),
  //   })

    ngOnInit(): void {
      this.customerData=this.fb.group({
        loan_Id:['',Validators.required],
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        status:['',Validators.required],
        emailId:['',Validators.required],
        address:['',Validators.required],
        phoneNo:['',Validators.required],
        duration:['',Validators.required],
        occupation:['',Validators.required],
        loanAmount:['',Validators.required],
        loanCategory:['',Validators.required],
        interestRate:['',Validators.required],
      });
    }

  
  allLoan(){
    this.loanService.getLoan().subscribe((data)=>{
      console.log(data);
      this.loan1=data;
    },(error)=>{
      console.log(error)
    });

  }

  edit(item:any){
    this.loanService.getById(item.loan_Id).subscribe(
      (resp)=>{
        console.log("in edit",resp);
        this.userData=resp;
       
         console.log("customer data",this.userData);
         console.log(this.userData.loan_Id);
         this.customerData.get('loan_Id').setValue(this.userData.loan_Id);
         this.customerData.get('firstName').setValue(this.userData.firstName);
         this.customerData.get('lastName').setValue(this.userData.lastName);
         this.customerData.get('status').setValue(this.userData.staus);
         this.customerData.get('emailId').setValue(this.userData.emailId);
         this.customerData.get('address').setValue(this.userData.address);
         this.customerData.get('phoneNo').setValue(this.userData.phoneNo);
         this.customerData.get('duration').setValue(this.userData.duration);
         this.customerData.get('occupation').setValue(this.userData.occupation);
         this.customerData.get('loanAmount').setValue(this.userData.loanAmount);
         this.customerData.get('loanCategory').setValue(this.userData.loanCategory);
         this.customerData.get('interestRate').setValue(this.userData.interestRate);
        

         
      },
      (err)=>{
        console.log(err);
      }
    )
  }


  updateLoan(){
    this.loanId=this.customerData.get("loan_Id").value
    console.log("update loan id",this.loanId)
    console.log("inside updateloan customer data",this.customerData.value)
    this.loanService.updateLoan(this.loanId,this.customerData.value).subscribe(
      (data)=>{
        console.log("update data",data);
        window.location.reload();
      },(error)=>{
        console.log("error",error);
        window.location.reload();
      }
    );
  }

}
