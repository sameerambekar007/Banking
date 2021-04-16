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
contact:Registerforib;
//bankingService:BankingService;
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact={
      customer_id:"",
      login_pass:"",
      account_no:null,
      trans_pass:null,
      service_ref_no:null,
      balance:null,
      customer_name:"",
      acct_type:"",
      account_status:"",
    };
  }
  OnSubmit(contactForm)
  {
    console.log(contactForm.value)
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

