import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-accountlocked',
  templateUrl: './accountlocked.component.html',
  styleUrls: ['./accountlocked.component.css']
})
export class AccountlockedComponent implements OnInit {

  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    // if(this.bankingService.loggedIn()==false)
    // {
    //   this.router.navigateByUrl('/custlogin')
    // }
  }

}
