import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {

  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    if(this.bankingService.loggedIn()==false)
    {
      this.router.navigateByUrl('/custlogin')
    }
  }
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('customer_id');

}
