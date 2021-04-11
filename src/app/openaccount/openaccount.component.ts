import { Component, OnInit } from '@angular/core';
import {BankingService} from '../banking.service';
import { Router } from '@angular/router';
import{FormsModule} from '@angular/forms';


@Component({
  selector: 'app-openaccount',
  templateUrl: './openaccount.component.html',
  styleUrls: ['./openaccount.component.css']
})
export class OpenaccountComponent implements OnInit{

  contact:contact;
    constructor(private router:Router,
      public bankingService: BankingService) { }
  
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
    onSubmit(contactForm)
  {
    //console.log("Hello");
    console.log(contactForm.value);

    this.bankingService.create(contactForm.value).subscribe(res=>
      {
        console.log("Customer added!")
      })

  }
  
  }
  
  export class contact {
    service_ref_no:number;
    title:string;
    first_name:string;
    middle_name:string;
    last_name: string;
    father_name:string;
    mobile_no:number;
    email_id:string;
    aadhar_no:number;
    date_of_birth:Date;
    res_addr_line1:string;
    res_addr_line2:string;
    res_landmark:string;
    res_state:string;
    res_city:string;
    res_pincode:number;
    perm_addr_line1:string;
    perm_addr_line2:string;
    perm_landmark:string;
    perm_state:string;
    perm_city:string;
    perm_pincode:number;  
    occ_type:string;
    inc_source:string;
    gross_annual_inc:number;
    acct_type:string;
    //acct_status:string;
    opt_debit_card:string;
    opt_netbanking:string
  }