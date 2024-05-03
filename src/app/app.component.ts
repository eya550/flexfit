import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader: boolean = true;
  showHeader2: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route
        if (event.url === '/compte' || event.url === '/editprofil') {
          // If the current route is '/compte' or '/editprofil', hide the header
          this.showHeader = false;
          this.showHeader2 = true; // Show the second header
        } else {
          // For other routes, show the header
          this.showHeader = true;
          this.showHeader2 = false; // Hide the second header
        }
      }
    });
  }
}
