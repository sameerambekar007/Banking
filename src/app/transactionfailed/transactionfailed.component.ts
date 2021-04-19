import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-transactionfailed',
  templateUrl: './transactionfailed.component.html',
  styleUrls: ['./transactionfailed.component.css']
})
export class TransactionfailedComponent implements OnInit {

  constructor(private router:Router,
    public bankingService: BankingService) { }

  ngOnInit(): void {
    if(this.bankingService.loggedIn()==false)
    {
      this.router.navigateByUrl('/custlogin')
    }
  }
logout()
{
  sessionStorage.clear();
}
public sessionStorage=sessionStorage
}
