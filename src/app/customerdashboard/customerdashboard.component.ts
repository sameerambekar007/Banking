import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BankingService} from '../banking.service';
@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

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
    sessionStorage.clear()
    this.router.navigateByUrl('/custlogin');
    console.log("session info" + sessionStorage)
  }
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('customer_id');
}
