import { Component, OnInit } from '@angular/core';
import {Registerforib} from '../registerforib'
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import { Accountstatement } from '../accountstatement';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
contact:Registerforib;
contact1:Accountstatement;
  accountsummary: any;
  transactions:any;
  debittransactions:Accountstatement[]=[];
  credittransactions:Accountstatement[]=[];
  transactions1:Accountstatement[]=[];
  transactions2:Accountstatement[]=[];
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    if(this.bankingService.loggedIn()==false)
    {
      this.router.navigateByUrl('/custlogin')
    }
    this.contact={
      customer_id:"",
      login_pass:"",
      account_no:JSON.parse(sessionStorage.getItem('account_no')),
      trans_pass:null,
      service_ref_no:null,
      balance:null,
      customer_name:"",
      acct_type:"",
      account_status:"",
    };
    this.contact1={
      ref_id:"",
      mode:"",
      recipient_acct:null,
      account_no:JSON.parse(sessionStorage.getItem('account_no')),
      amount:null,
      trans_date:new Date("2020-04-18T19:30:22.44"),
      to_trans_date:new Date(),
      remarks:"",
      trans_pass:null,
    };
    this.bankingService.accountsummary(this.contact).subscribe(res=>
      {
        this.accountsummary=res;
       // console.log(this.accountsummary)
      })
      //console.log(this.contact1)
      this.bankingService.accountstatement(this.contact1).subscribe(res=>
        {
        // console.log(this.contact1)
        console.log("res")
         console.log(res) 
          this.transactions=res   
          this.debittransactions=this.transactions.debit
          this.credittransactions=this.transactions.credit
          this.transactions1=this.debittransactions.concat(this.credittransactions)
          this.transactions1=this.transactions1.sort((a, b) => (a.trans_date > b.trans_date) ? 1 : -1)
          this.transactions2=this.transactions1.slice(Math.max(this.transactions1.length - 4, 0))
          this.transactions2=this.transactions2.reverse();
          console.log(this.transactions2)
          console.log(this.transactions1)
          
          //console.log(this.transactions)
  //        console.log(res)
  
        })

  }
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('customer_id');
  logout()
  {
    sessionStorage.clear();
  }
}
