import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';
import {Accountstatement} from '../accountstatement';

@Component({
  selector: 'app-accountstatementmain',
  templateUrl: './accountstatementmain.component.html',
  styleUrls: ['./accountstatementmain.component.css']
})
export class AccountstatementmainComponent implements OnInit {
contact:Accountstatement
  transactions:any
  debittransactions:Accountstatement[]=[];
  credittransactions:Accountstatement[]=[];
  transactions1:Accountstatement[]=[];
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    if(this.bankingService.loggedIn()==false)
    {
      this.router.navigateByUrl('/custlogin')
    }

    this.contact={
      ref_id:"",
      mode:"",
      recipient_acct:null,
      account_no:JSON.parse(sessionStorage.getItem('account_no')),
      amount:null,
      trans_date:null,
      to_trans_date:null,
      remarks:"",
      trans_pass:null,
    };
    
    console.log(this.contact)  
  }

  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('customer_id');
  OnSubmit(contactForm)
{
  //contactForm.value.account_no=sessionStorage.getItem('account_no');
console.log(contactForm.value)
this.contact.trans_date=contactForm.value.trans_date
this.contact.to_trans_date=contactForm.value.to_trans_date
console.log(this.contact)
    this.bankingService.accountstatement(this.contact).subscribe(res=>
      {
        
        this.transactions=res
        this.debittransactions=this.transactions.debit
        this.credittransactions=this.transactions.credit
        this.transactions1=this.debittransactions.concat(this.credittransactions)
        this.transactions1=this.transactions1.sort((a, b) => (a.trans_date > b.trans_date) ? 1 : -1)
        console.log(this.transactions1)
        //console.log(this.transactions)
//        console.log(res)

      })
}
logout()
{
  sessionStorage.clear();
}
}

