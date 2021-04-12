import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';

@Component({
  selector: 'app-impstransaction',
  templateUrl: './impstransaction.component.html',
  styleUrls: ['./impstransaction.component.css']
})
export class ImpstransactionComponent implements OnInit {
  contact:contact;
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact = { 
      recipient_acct:null,
      trans_date:null,
      remarks:"",
      amount:null,
      account_no:null
    }
  }
  onSubmit(contactForm)
  {
    //console.log("Hello");
    console.log(contactForm.value);

    this.bankingService.imps(contactForm.value).subscribe(res=>
      {
        console.log("Transaction Success!")
      })
}
}

export class contact{
  recipient_acct:number;
  trans_date:Date;
  remarks:string;
  amount:number;
  account_no:number;
}
