import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addbeneficiary } from '../addbeneficiary';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-displaybeneficiaries',
  templateUrl: './displaybeneficiaries.component.html',
  styleUrls: ['./displaybeneficiaries.component.css']
})
export class DisplaybeneficiariesComponent implements OnInit {
contact:contact
beneficiarylist1:any

  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    if(this.bankingService.loggedIn()==false)
    {
      this.router.navigateByUrl('/custlogin')
    }
    this.contact = { 
      recipient_acct:null,
      //trans_date:null,
      remarks:"",
      amount:null,
      account_no: JSON.parse(sessionStorage.getItem('account_no')),
      trans_pass:null,
      ref_id:""
    }
    this.bankingService.getreleventbeneficiary(this.contact).subscribe(res => {
      //console.log(res)
      console.log(typeof(res))
      this.beneficiarylist1 = res
      console.log(this.beneficiarylist1)
    });
  }
  public sessionStorage=sessionStorage
  logout()
  {
    sessionStorage.clear()
  }

}
export class contact{
  recipient_acct:number;
  //trans_date:Date;
  remarks:string;
  amount:number;
  account_no:number;
  trans_pass:number;
  ref_id:string
}

