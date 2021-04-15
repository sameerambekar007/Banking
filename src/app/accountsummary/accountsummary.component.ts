import { Component, OnInit } from '@angular/core';
import {Registerforib} from '../registerforib'
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
contact:Registerforib;
  accountsummary: any;
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
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
    this.bankingService.accountsummary(this.contact).subscribe(res=>
      {
        this.accountsummary=res;
        console.log(this.accountsummary)
      })
  }
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('customer_id');
}
