import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalidtranspassword',
  templateUrl: './invalidtranspassword.component.html',
  styleUrls: ['./invalidtranspassword.component.css']
})
export class InvalidtranspasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
logout()
{
  sessionStorage.clear();
}
public sessionStorage=sessionStorage;
}
