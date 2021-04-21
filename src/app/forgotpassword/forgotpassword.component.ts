import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
contact:contact;
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact={
      account_no:null,
      email_id:"",
      otp:null
    };
  }
  OnClick(contact)
  {
    console.log(contact)
    this.bankingService.forgotpassword(contact).subscribe(res=>
      {
        if(res.toString()=="otp sent")
        {
          alert("Otp sent on your registered email id\n Click Ok to enter otp")
         
        }

        if(res.toString()=="not matched")
        {
          alert("Account number and emailid do not match")
        }
      })
  }
  OnSubmit(contact)
  {
    console.log(contact)
    this.bankingService.sendpassword(contact).subscribe(res=>
      {
        console.log(res)
        if(res.toString()=="success")
        {
          alert("Password sent successfully on your email id")
          this.router.navigateByUrl('/custlogin')
        }
        if(res.toString()=="fail")
        {
          // this.count++
          // if(this.count<3)
          // {
          // alert("Otp does not match\n Click again to enter Otp")
          // }
          // if(this.count==3)
          // {
          //   alert("You have entered the wrong otp thrice!\nClick Ok to enter your details again")
          //   this.router.navigateByUrl('/home')
          // }
          alert("Otp does not match\n Click on Generate otp to regenerate otp")
        }
      })
  }

}

export class contact {
  account_no:number;
  email_id:string;
  otp:number;
}
