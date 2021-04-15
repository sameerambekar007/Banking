import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
