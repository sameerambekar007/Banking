import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import {CustomerRequests} from '../customer-requests';
import {ActivatedRoute} from '@angular/router'; 
import {AccountHolderinsert} from '../account-holderinsert';
import { Openaccount } from '../openaccount';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
contact:Openaccount
userprofile:any
  constructor(
    public bankingService: BankingService,
    private router:ActivatedRoute,
    private router1:Router
  ) { }

  ngOnInit(): void {
    if(this.bankingService.loggedIn()==false)
    {
      this.router1.navigateByUrl('/custlogin')
    }
    this.contact = { 
      service_ref_no:JSON.parse(sessionStorage.getItem('service_ref_no')),
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

    this.bankingService.fetchuserdetails(this.contact).subscribe(res=>
      {
        
        this.userprofile=res
       // console.log(this.userprofile)
        console.log(this.userprofile[0].service_ref_no)
        
      })
  }
  logout()
  {
    sessionStorage.clear();
  }
  public sessionStorage=sessionStorage;
  
}

