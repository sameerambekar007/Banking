import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-changetransactionpassword',
  templateUrl: './changetransactionpassword.component.html',
  styleUrls: ['./changetransactionpassword.component.css']
})
export class ChangetransactionpasswordComponent implements OnInit {
contact:contact
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact={
      trans_pass:null,
      new_trans_pass:null,
      reenter_trans_pass:null,
      account_no:JSON.parse(sessionStorage.getItem('account_no'))
    };
  }
  OnSubmit(contactForm)
  {
    contactForm.value.account_no=this.contact.account_no
    console.log(contactForm.value)
    if(contactForm.value.new_trans_pass!=contactForm.value.reenter_trans_pass)
    {
      alert("Password and Reenter do not match")
    }
    
    else
    {
    this.bankingService.changetranspassword(this.contact).subscribe(res=>
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
logout()
{
  sessionStorage.clear();
}
}
export class contact{
  trans_pass:number;
  new_trans_pass:number;
  reenter_trans_pass:number;
  account_no:number;
}
