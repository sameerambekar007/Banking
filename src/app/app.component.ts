import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banking';

  logout()
  {
    sessionStorage.clear()
    console.log("session info" + sessionStorage)
  }
}
