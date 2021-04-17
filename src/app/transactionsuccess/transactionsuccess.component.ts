import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import {Transactions} from '../transactions';
import {ActivatedRoute} from '@angular/router'; 
@Component({
  selector: 'app-transactionsuccess',
  templateUrl: './transactionsuccess.component.html',
  styleUrls: ['./transactionsuccess.component.css']
})
export class TransactionsuccessComponent implements OnInit {
contact:Transactions;
  userprofile: any;

  constructor(
    public bankingService: BankingService,
    private router:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.contact={
      ref_id:sessionStorage.getItem('ref_id'),
      mode:"",
      recipient_acct:null,
      account_no:null,
      amount:null,
      trans_date:null,
      remarks:"",
      trans_pass:null
    };
    this.bankingService.fetchsuccessfultrans(this.contact).subscribe(res=>
      {
        
        this.userprofile=res
       // console.log(this.userprofile)
        console.log(this.userprofile)
        
      })
  }
  logout()
  {
    sessionStorage.clear();
  }

}
