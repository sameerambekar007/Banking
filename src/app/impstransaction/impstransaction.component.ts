import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import {AccountHolder} from '../account-holder';
import {Addbeneficiary} from '../addbeneficiary';

@Component({
  selector: 'app-impstransaction',
  templateUrl: './impstransaction.component.html',
  styleUrls: ['./impstransaction.component.css']
})
export class ImpstransactionComponent implements OnInit {
  contact:contact;
  public accountholder1:AccountHolder[]=[];
 public beneficiarylist:Addbeneficiary[]=[];
  public abc:string;
  public account_no:number;
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact = { 
      recipient_acct:null,
      trans_date:null,
      remarks:"",
      amount:null,
      account_no: JSON.parse(sessionStorage.getItem('account_no'))
    }
  //   this.bankingService.getAllaccountholders().subscribe((data: AccountHolder[])=>{
      
  //      this.accountholder1=data;
      
  //     this.abc= sessionStorage.getItem('customer_id')
      
  // })

  this.bankingService.getAllBeneficiaries().subscribe((data: Addbeneficiary[])=>{
    //console.log("inside subscribe")
     //console.log(data);
    // console.log(this.beneficiarylist);
    for (let i = 0; i < data.length;i++) 
             {
              //  console.log("inside for")
              if (data[i].account_no==JSON.parse(sessionStorage.getItem('account_no')))
              {
                //console.log("inside if")
                //console.log(this.accountholder1[i].account_no)
                  this.beneficiarylist.push(data[i]);
              }
            }
            console.log(this.beneficiarylist)

})
  
  }
  
  onSubmit(contactForm)
  {
    //console.log("Hello");

    //contactForm.value=this.account_no
    console.log(contactForm.value);
    this.bankingService.imps(contactForm.value).subscribe(res=>
      {
        console.log("Transaction Success!")
      })
}
public sessionStorage = sessionStorage;
}

export class contact{
  recipient_acct:number;
  trans_date:Date;
  remarks:string;
  amount:number;
  account_no:number;
}
