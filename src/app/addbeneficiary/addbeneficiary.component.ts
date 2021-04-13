import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';

@Component({
  selector: 'app-addbeneficiary',
  templateUrl: './addbeneficiary.component.html',
  styleUrls: ['./addbeneficiary.component.css']
})
export class AddbeneficiaryComponent implements OnInit {
  contact:contact;
  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    this.contact = { 
      ben_account_no:null,
      ben_name:"",
      ben_nickname:"",
     // ben_id:null,
      account_no:JSON.parse(sessionStorage.getItem('account_no'))
  }

}
onSubmit(contactForm)
  {
    //console.log("Hello");
    console.log(contactForm.value);

    this.bankingService.addben(contactForm.value).subscribe(res=>
      {
        console.log("Beneficiary added!")
      })

  }
}

export class contact{
  ben_account_no:number;
  ben_name:string;
  ben_nickname:string;
  //ben_id:number;
  account_no:number;
}
