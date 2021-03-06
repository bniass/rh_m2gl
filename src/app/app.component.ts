import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rh-m2gl';

  url: string;
  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
        console.log(this.router.url);
        //this.router.navigate(['/login']);
        
      }
  });
  }
}
