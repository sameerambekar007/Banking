import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';
import {Addbeneficiary} from '../addbeneficiary';



@Component({
  selector: 'app-neftransaction',
  templateUrl: './neftransaction.component.html',
  styleUrls: ['./neftransaction.component.css']
})
export class NeftransactionComponent implements OnInit {

  contact:contact;
  public beneficiarylist:Addbeneficiary[]=[];
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact = { 
      recipient_acct:null,
      trans_date:null,
      remarks:"",
      amount:null,
      account_no:JSON.parse(sessionStorage.getItem('account_no'))
    }
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
    console.log(contactForm.value);

    this.bankingService.neft(contactForm.value).subscribe(res=>
      {
        console.log("Transaction Successful!")
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

