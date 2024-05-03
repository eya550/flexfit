import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // Corrected typo here from styleUrl to styleUrls
})
export class AdminComponent {
  admin = {
    mail: '',
    password: '',
  };
  errorType: string = '';

  constructor(public _api: ApiService, private router: Router) {}

  connect() {  
    if (!this.admin || !this.admin.mail || !this.admin.password) {
    console.error('Email or password is missing');
    this.errorType = 'Email or password is missing';
    return;
  }
    this._api.connectAdmin(this.admin).subscribe((res: any) => {
      if (res.status === 'success') {
        this.router.navigate(['/admin1']);
      } else if (res.status === 'error') {
        if (res.message === 'Incorrect password' || res.message === 'Email not found') {
          this.errorType = res.message;
        }
      }
    }, (err) => {
      console.error(err);
    });
  }
  }
