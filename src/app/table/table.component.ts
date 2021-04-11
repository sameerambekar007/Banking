import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `<table>
    <caption>User actions</caption>
    <thead>
        <tr>
            <th>Activity Name</th>
            <th>From Account</th>
            <th>To Account</th>
      <th>Amount</th>
        </tr>
    </thead>
  <tbody>
    <tr *ngFor="let line of data;">
      <td>{{ line.activity }}</td>
      <td>{{ line.from }}</td>
      <td>{{ line.to }}</td>
      <td><input type="number" [(ngModel)]="line.amount"></td>
    </tr>
  </tbody>
</table>

<button (click)="submit()">Submit</button>`,
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data = [
    { activity: 'Deposit', from: 'Personal1', to: 'Bank1', amount: 0 },
    { activity: 'Withdrawal', from: 'Bank1', to: 'Personal1', amount: 0 },
    { activity: 'Deposit', from: 'Personal2', to: 'Bank1', amount: 0 },
  ];

  submit() {
    for (let line of this.data) {
      console.log(line);
    }
  }
}  
