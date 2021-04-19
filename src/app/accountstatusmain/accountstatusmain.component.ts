import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-accountstatusmain',
  templateUrl: './accountstatusmain.component.html',
  styleUrls: ['./accountstatusmain.component.css']
})
export class AccountstatusmainComponent implements OnInit {

  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    if(this.bankingService.loggedIn()==false)
    {
      this.router.navigateByUrl('/custlogin')
    }
  }

}
