import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountstatementmain',
  templateUrl: './accountstatementmain.component.html',
  styleUrls: ['./accountstatementmain.component.css']
})
export class AccountstatementmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('customer_id');
}
