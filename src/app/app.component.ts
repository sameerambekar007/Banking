import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

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
  public sessionStorage=sessionStorage;
  constructor(private bnIdle: BnNgIdleService,
    private router:Router) {
    // initiate it in your component constructor
    this.bnIdle.startWatching(15000).subscribe((res) => {
      if(res) {
          alert("session expired");
          sessionStorage.clear();
          this.router.navigateByUrl('/sessionexpired')
      }
    })
   }
  
  ngOnInit(): void {
    
}
}
