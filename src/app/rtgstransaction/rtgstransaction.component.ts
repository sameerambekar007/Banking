import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';
import {AccountHolder} from '../account-holder';
import {Addbeneficiary} from '../addbeneficiary';


@Component({
  selector: 'app-rtgstransaction',
  templateUrl: './rtgstransaction.component.html',
  styleUrls: ['./rtgstransaction.component.css']
})
export class RtgstransactionComponent implements OnInit {

  contact:contact;
  public accountholder1:AccountHolder[]=[];
 public beneficiarylist:Addbeneficiary[]=[];
  public abc:string;
  transuccess:any;
  public account_no:number;
  public beneficiarylist1:any
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
  //   this.bankingService.getAllaccountholders().subscribe((data: AccountHolder[])=>{
      
  //      this.accountholder1=data;
      
  //     this.abc= sessionStorage.getItem('customer_id')
      
  // })

//   this.bankingService.getAllBeneficiaries().subscribe((data: Addbeneficiary[])=>{
//     //console.log("inside subscribe")
//      //console.log(data);
//     // console.log(this.beneficiarylist);
//     for (let i = 0; i < data.length;i++) 
//              {
//               //  console.log("inside for")
//               if (data[i].account_no==JSON.parse(sessionStorage.getItem('account_no')))
//               {
//                 //console.log("inside if")
//                 //console.log(this.accountholder1[i].account_no)
//                   this.beneficiarylist.push(data[i]);
//               }
//             }
//             console.log(this.beneficiarylist)

// }) 

  this.bankingService.getreleventbeneficiary(this.contact).subscribe(res => {
      //console.log(res)
      console.log(typeof(res))
      this.beneficiarylist1 = res
      console.log(this.beneficiarylist1)
    });
  
  }
  
  onSubmit(contactForm)
  {
    //console.log("Hello");
contactForm.value.ref_id= "RTGS"+"@"+Math.floor(Math.random() * (100000 - 10000 + 1));
   sessionStorage.setItem('ref_id',contactForm.value.ref_id)
   console.log(sessionStorage.getItem('ref_id'))
    console.log(contactForm.value);
    this.bankingService.rtgs(contactForm.value).subscribe(res=>
      {
        if(res.toString()=="success")
        {
        console.log("Transaction Success!")
        this.transuccess=res
        console.log(this.transuccess)
        this.router.navigateByUrl('/transuccess');
        
        }
        if(res.toString()=="invalidpass")
        {
        console.log("Invalid Password!")
        this.router.navigateByUrl('/invalidtranspassword');
        }
        if(res.toString()=="notenoughbalance")
        {
        console.log("Insufficient balance!")
        this.router.navigateByUrl('/transactionfailed');
        }
      })
}
public sessionStorage = sessionStorage;
logout()
{
  sessionStorage.clear();
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
