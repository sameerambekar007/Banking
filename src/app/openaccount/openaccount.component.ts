import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';


@Component({
  selector: 'app-openaccount',
  templateUrl: './openaccount.component.html',
  styleUrls: ['./openaccount.component.css']
})
export class OpenaccountComponent implements OnInit{
  contact:contact;
    constructor() { }
  
    ngOnInit(): void {
      this.contact = { 
        Title:"",
        firstname:"",
        middlename:"",
        lastname: "",
        fathername:"",
        mobile:null,
        email:"",
        aadhar:null,
        dob:null,
        raddr1:"",
        raddr2:"",
        rlandmark:"",
        rstate:"",
        rcity:"",
        rpincode:null,
        paddr1:"",
        paddr2:"",
        plandmark:"",
        pstate:"",
        pcity:"",
        ppincode:null,
        occtype:"",
        incsource:"",
        grossannincome:null,
      };
    }
    onSubmit(contactForm)
  {
    //console.log("Hello");
    console.log(contactForm.value);
  }
  
  }
  
  export class contact {
    Title:string;
    firstname:string;
    middlename:string;
    lastname: string;
    fathername:string;
    mobile:number;
    email:string;
    aadhar:number;
    dob:Date
    raddr1:string;
    raddr2:string;
    rlandmark:string;
    rstate:string;
    rcity:string;
    rpincode:number;
    paddr1:string;
    paddr2:string;
    plandmark:string;
    pstate:string;
    pcity:string;
    ppincode:number;  
    occtype:string;
    incsource:string;
    grossannincome:number
  }