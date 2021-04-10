import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Admin } from '../admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contact:contact;
  contactForm: FormControl;
  
  ngOnInit() {
  this.contact = { 
      admin_id:"",
      admin_password:"",
    };
}
constructor(private router:Router,
  public bankingService: BankingService ) {

}
onSubmit(contactForm) {
  console.log(contactForm.value) 
  this.bankingService.login(contactForm.value).subscribe(res => {
      console.log(res)
      if(res.toString()=="Found")
      {
        //console.log("In Found");
        
        sessionStorage.setItem('username',contactForm.value.admin_id);
        this.router.navigateByUrl('/admindash');
        //let key = 'Item 1';
        //sessionStorage.setItem(key, 'username');

      }
      else
      {
        alert("Invalid login!!");
      }
      console.log(sessionStorage);
    });
}

  //onSubmit(contactForm)
//{
  //console.log("Hello");
  //console.log(this.contactForm.value);
  // this.ltiService.login(this.contactForm.value).subscribe(res => {
  //   console.log(res)
  //   if(res.toString()=="FOUND")
  //   {
  //     this.router.navigateByUrl('/welcome');
  //   }
  // });
//}
  
}
export class contact {
  admin_id:string;
  admin_password:string;
}

