import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import {AccountHolder} from '../account-holder';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
contact:contact
accountholder:Array<any> = new Array<any>();
public custid:string;
public key:number;
//data: Array<any> = new Array<any>();
public accountholder1:AccountHolder[]=[];

public count: number = 0;
public prev:string='old';

  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
   
    this.contact = { 
      customer_id:"",
      login_pass:"",
      account_no:null,
      trans_pass:"",
      service_ref_no:null,
      balance:null,
      customer_name:"",
      acct_type:""
    };

  //   this.bankingService.getAllaccountholders().subscribe((data: AccountHolder[])=>{
  //     //console.log("inside subscribe")
  //      this.accountholder1=data;
  //   //   console.log(this.accountholder1);
  //     //  for (let i = 0; i < this.accountholder.length;i++) {
  //     //   if (this.accountholder[i].customer_id==contactForm.value.customer_id)
  //     //   {
  //     //     console.log("inside if")
  //     //     console.log(this.accountholder[i].account_no)
  //     //   }
  //     // }
  //      //console.log(this.openaccount);
  //    //console.log(this.customerRequests);
  //   // console.log(this.accountholder1)
  // })
  console.log(this.accountholder1)
  }
  onSubmit(contactForm) {
    this.prev=='old'
    console.log(contactForm.value) 
    this.bankingService.custlogin(contactForm.value).subscribe(res => {
        console.log(res)
        if(res.toString()=="Found")
        {
          sessionStorage.setItem('customer_id',contactForm.value.customer_id);
          this.bankingService.getAllaccountholders().subscribe((data: AccountHolder[])=>{
             this.accountholder1=data;
             this.custid=sessionStorage.getItem('customer_id')
             console.log(this.custid)
             for (let i = 0; i < this.accountholder1.length;i++) 
             {
               console.log("inside for")
              if (this.accountholder1[i].customer_id==this.custid)
              {
                let key = 'account_no';
                 sessionStorage.setItem('account_no',JSON.stringify(this.accountholder1[i].account_no));
                 sessionStorage.setItem('service_ref_no',JSON.stringify(this.accountholder1[i].service_ref_no))
                 sessionStorage.setItem('customer_name',this.accountholder1[i].customer_name)
              }
            }
           console.log(sessionStorage);
        })

        console.log(sessionStorage);

          this.router.navigateByUrl('/custdash');
        }
        else
        {
         // alert("Invalid login!!");
         if(this.prev=='old')
         {
           this.prev=contactForm.value.customer_id;
           this.count=1;
           
           if(this.count==1)
           {
            alert ("invalid login" + this.count + "\nAccount will be locked after 2 more invalid attempts")
           }
           console.log("invalid login",this.count);
           
         }
         else if(this.prev==contactForm.value.customer_id)
         {
           this.count++;
           //alert ("invalid login" + this.count)
           if(this.count==2)
           {
            alert ("invalid login" + this.count + "\nAccount will be locked after 1 more invalid attempt")
           }
           console.log("invalid login",this.count);
           //alert ("invalid login" )
           if(this.count==3)
           {
             
             this.bankingService.custblocked(contactForm.value).subscribe(res=>
              {
               // alert("your account has been blocked, Press ok to reactivate it. ")
                this.router.navigateByUrl('/accountlocked');
              })
             
           }
         }
         else
         {
         this.prev=contactForm.value.customer_id;
         this.count=1;
         alert("invalid login" + this.count)
         console.log("invalid login",this.count);
       }
          // this.bankingService.custblocked(contactForm.value).subscribe(res=>
          //   {
          //     console.log("Account blocked!")
          //   })
      
        }
        console.log(sessionStorage);
      });
  }
  public sessionStorage = sessionStorage;
}

export class contact{
  customer_id:string;
  login_pass:string;
  account_no:number;
  trans_pass:string;
  service_ref_no:number;
  balance:number;
  customer_name:string;
  acct_type:string;
}
