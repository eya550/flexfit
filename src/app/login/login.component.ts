import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    mail: '',
    pass: '',
  };
  profil = {
    mail: '',
    pass: '',
    tel: '',
    fullname: ''
  };
  errorType: string = '';
  abo: any[] = [];
  constructor(public _api: ApiService, private router: Router) {}

  onLogin() {
    if (!this.login || !this.login.mail || !this.login.pass) {
      console.error('Email or password is missing');
      this.errorType = 'Email or password is missing';
      return;
    }

    this._api.authentification(this.login).subscribe((res: any) => {
      console.log(res);

      if (res && res.status === 'success') {
        // Ensure that 'mail' is a property of 'res.profil' and contains the email
        if (res.profil && res.profil.mail) {
          sessionStorage.setItem('mail', res.profil.mail);
          this.router.navigate(['/compte']);
        } else {
          console.error('Email not found in response');
        }
      } else if (res && res.status === 'error') {
        if (res.message === 'Incorrect password' || res.message === 'Email not found') {
          this.errorType = res.message;
        }
      }
    }, (err) => {
      console.error(err);
    });
}


onAjoutProfil() {
  if (!this.profil || !this.profil.mail || !this.profil.pass || !this.profil.tel || !this.profil.fullname) {
    console.error('One or more profile fields are missing');
    this.errorType = 'One or more profile fields are missing';
    return;
  }

  this._api.createprofil(this.profil).subscribe(
    (res: any) => {
      console.log(res);

      if (res && res.status === 'success') {
        if (res.profil && res.profil.mail) {
          sessionStorage.setItem('mail', res.profil.mail);
          this.router.navigate(['/log2']);
        } else {
          console.error('Email not found in response');
        }
      } else if (res && res.status === 'error') {
        // Handle the 'Email already exists' error message
        if (res.message === 'Email already exists') {
          this.errorType = res.message;
        } else {
          // Handle other error messages
          console.error('Error:', res.message);
        }
      }
    },
    (err) => {
      console.error(err);
    }
  );
}
}
