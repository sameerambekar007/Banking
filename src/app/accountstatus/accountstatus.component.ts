import { Component, OnInit } from '@angular/core';
import { Openaccount } from '../openaccount';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-accountstatus',
  templateUrl: './accountstatus.component.html',
  styleUrls: ['./accountstatus.component.css']
})
export class AccountstatusComponent implements OnInit {
contact:Openaccount;
  userprofile: Openaccount;
  constructor(
    public bankingService: BankingService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.contact = { 
      service_ref_no:null,
      title:"",
      first_name:"",
      middle_name:"",
      last_name: "",
      father_name:"",
      mobile_no:null,
      email_id:"",
      aadhar_no:null,
      date_of_birth:null,
      res_addr_line1:"",
      res_addr_line2:"",
      res_landmark:"",
      res_state:"",
      res_city:"",
      res_pincode:null,
      perm_addr_line1:"",
      perm_addr_line2:"",
      perm_landmark:"",
      perm_state:"",
      perm_city:"",
      perm_pincode:null,
      occ_type:"",
      inc_source:"",
      gross_annual_inc:null,
      acct_type:"",
      //acct_status: "open",
      opt_debit_card:"",
      opt_netbanking:""
    };

  }
  OnSubmit(contactForm)
  {
    console.log(this.contact)
    this.bankingService.fetchaccountopeningsatatus(this.contact).subscribe(res=>
      {
        console.log(res)
        if(res.toString()=="no match")
        {
          alert("Your Credentials do not match")
        }
        else
        {
        this.userprofile=res
       // console.log(this.userprofile)
       
        if(this.userprofile[0].acct_status=="approved")
        {
          alert("Your account is " + this.userprofile[0].acct_status + " \nClick Ok to Proceed to login")
          this.router.navigateByUrl('/custlogin')
        }
        if(this.userprofile[0].acct_status=="declined")
        {
          alert("Your account is " + this.userprofile[0].acct_status + "\n Click Ok to go back to the home page")
          this.router.navigateByUrl('/home')
        }
        if(this.userprofile[0].acct_status=="pending")
        {
          this.router.navigateByUrl('/accountstatusmain')
        }
        }
        
      })
  }

}
