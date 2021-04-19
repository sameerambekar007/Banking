import { Component, OnInit } from '@angular/core';
import {Registerforib} from '../registerforib'
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';

@Component({
  selector: 'app-registerforib',
  templateUrl: './registerforib.component.html',
  styleUrls: ['./registerforib.component.css']
})
export class RegisterforibComponent implements OnInit {
contact:contact;
//bankingService:BankingService;
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact={
      customer_id:"",
      login_pass:"",
      account_no:null,
      trans_pass:null,
      reenter_login_pass:"",
      reenter_trans_pass:null,
    };
  }
  OnSubmit(contactForm)
  {
    
    if(contactForm.value.login_pass!=contactForm.value.reenter_login_pass)
    {
      alert("Login password and reenter password does not match!")
    }
    else if(contactForm.value.trans_pass!=contactForm.value.reenter_trans_pass)
    {
      alert("Transaction password and reenter transaction password does not match!")
    }
    //console.log(contactForm.value)
    else
    {
    this.bankingService.registerforib(contactForm.value).subscribe(res=>
      {
        console.log(res)
        if(res.toString()=="success")
        {
        console.log("Login and transaction pass generated!")
        alert("Login and transaction pass generated!")
        this.router.navigateByUrl('/custlogin')
      }
      if(res.toString()=="exists")
      {
      console.log("Netbanking account already exists!")
      alert("Netbanking account already exists!")
    }
    if(res.toString()=="invalid")
    {
    console.log("Customer Id and Account number do not match!")
    alert("Customer Id and Account number do not match!")
  }
      })
    }
  }  
}
export class contact
{
  customer_id:string;
  login_pass:string;
  reenter_login_pass:string;
  account_no:number;
  trans_pass:number;
  reenter_trans_pass:number;
}

