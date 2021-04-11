import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import {CustomerRequests} from '../customer-requests';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  contact:contact;
  contactForm: FormControl;
  customerRequests: CustomerRequests[] = [];
  // CustomerRequests:CustomerRequests;
  constructor(private router:Router,
    public bankingService: BankingService) { }
  
  ngOnInit(): void {
    this.contact = { 
      first_name: "",
      acct_type: "",
      service_ref_no:null
    
    };



    this.bankingService.getAll().subscribe((data: CustomerRequests[])=>{
      //console.log("inside subscribe")
      this.customerRequests=data;
     //console.log(this.customerRequests);
  }) 
  }
//   onClick(){    
//     console.log("Approve button is clicked!");  
//     this.bankingService.login(this.customerRequests).subscribe(res => {
//       console.log(res)
//       if(res.toString()=="Found")
//       {
//         console.log("In Found");
      
//       }
//       else
//       {
//         alert("Invalid login!!");
//       }
//       console.log(sessionStorage);
//     });
// }

onSubmit(contactForm) {
  console.log(contactForm.value) 
  this.bankingService.approve(contactForm.value).subscribe(res => {
     // console.log(res)
      if(res.toString()=="Found")
      {
        console.log("In Found");
      
      }
      else
      {
        alert("Invalid request!!");
      }
      //console.log(sessionStorage);
    });
}


  
  RequestDenied()
  {
    console.log("Customer is denied account");
  }
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('admin_id');
  
  
}

export class contact {
  first_name: string;
  acct_type: string;
  service_ref_no:number;

}

