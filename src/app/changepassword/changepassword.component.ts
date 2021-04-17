import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';
import {Accountstatement} from '../accountstatement';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
contact:contact
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact={
      login_pass:"",
      new_pass:"",
      reenter_new_pass:"",
      account_no:JSON.parse(sessionStorage.getItem('account_no'))
    };
  }

  OnSubmit(contactForm)
  {
    contactForm.value.account_no=this.contact.account_no
    console.log(contactForm.value)
    if(contactForm.value.new_pass!=contactForm.value.reenter_new_pass)
    {
      alert("Password and Reenter do not match")
    }
    else
    {
    this.bankingService.changepassword(this.contact).subscribe(res=>
      {
        if(res.toString()=="success")
        {
          alert("Password updated successfully!")
        }
        if(res.toString()=="fail")
        {
          alert("Wrong Current Password entered")
        }
      })
  }
}
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('account_no');
  logout()
  {
    sessionStorage.clear();
  }
}
export class contact{
  login_pass:string;
  new_pass:string;
  reenter_new_pass:string;
  account_no:number;
}

