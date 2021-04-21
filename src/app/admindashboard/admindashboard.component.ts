import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import {CustomerRequests} from '../customer-requests';
import {ActivatedRoute} from '@angular/router'; 
import {AccountHolderinsert} from '../account-holderinsert';
import { Openaccount } from '../openaccount';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  contact:contact;
  cust:CustomerRequests;
  
 contactForm: FormControl;
  customerRequests: CustomerRequests[] = [];
  openaccount:Openaccount[] =[];
  
  customer: any;
  // CustomerRequests:CustomerRequests;
  constructor(
    public bankingService: BankingService,
    private router:ActivatedRoute,
    private router1:Router
    ) { }
  
  ngOnInit(): void {
    if(this.bankingService.adminloggedIn()==false)
    {
      this.router1.navigateByUrl('/login');
    }
    this.contact = { 
      first_name: "",
      acct_type: "",
      service_ref_no:null
    
    };
    



  //   this.bankingService.getAll().subscribe((data: CustomerRequests[])=>{
  //     //console.log("inside subscribe")
  //      this.customerRequests=data;
  //    //console.log(this.customerRequests);
  // })
console.log(sessionStorage)
  if(sessionStorage.getItem('admin_id')!=null)
  {
  this.bankingService.getAll1().subscribe((data: Openaccount[])=>{
    //console.log("inside subscribe")
     this.openaccount=data;
     console.log(this.openaccount);
})
}
  }
onSubmit(customer) {
  if(sessionStorage.getItem('admin_id')!=null)
  {
  //console.log(customer);
  console.log(new AccountHolderinsert(customer.first_name,customer.acct_type,customer.service_ref_no));
  // this.cust.acct_type=acct_type;
  // this.cust.first_name=first_name;
  // this.cust.service_ref_no=service_ref_no;
  this.bankingService.Accountholder(new AccountHolderinsert(customer.first_name,customer.acct_type,customer.service_ref_no)).subscribe(res=>
    {
      console.log("Customer added!")
      alert("Account created successfully!")
    })
  }
}
remove(customer)

     {
      if(sessionStorage.getItem('admin_id')!=null)
      {
      this.bankingService.approvechangestatus(customer).subscribe(res=>
        {
          console.log("Customer status changed!")
        })
      }
  
     }
viewdetails(customer)
{
  if(sessionStorage.getItem('admin_id')!=null)
  {
  this.customer=customer;
  //console.log(typeof(this.customer));
  console.log(this.customer);
  }
}
  
  RequestDenied(customer)
  {
    if(sessionStorage.getItem('admin_id')!=null)
    {
    this.bankingService.declineaccount(customer).subscribe(res=>
      {
        console.log("Customer Declined account!")
        alert("Customer Declined account!")
      })
    }
}
  // public sessionStorage = sessionStorage;
  // public session=sessionStorage.getItem('admin_id');
  
  logout()
  {
    sessionStorage.clear()
    console.log("session info" + sessionStorage)
  }
  
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('admin_id');
  
}

export class contact {
  first_name: string;
  acct_type: string;
  service_ref_no:number;

}

function remove(Customer: any) {
  throw new Error('Function not implemented.');
}

