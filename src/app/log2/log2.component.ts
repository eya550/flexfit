import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log2',
  templateUrl: './log2.component.html',
  styleUrls: ['./log2.component.css']
})
export class Log2Component {
  abonne = {
    nom: '',
    prenom: '',
    age: '',
    genre: '',
    taille: '',
    poids: '',
    objectif: '',
    mail:''
  };
  errorType: string = '';
  constructor(public _api: ApiService, private router: Router) {}

  ajout() {
    if (!this.abonne || !this.abonne.nom || !this.abonne.prenom || !this.abonne.age || !this.abonne.genre
      || !this.abonne.taille || !this.abonne.poids || !this.abonne.objectif
    ) {
      console.error('One or more profile fields are missing');
      this.errorType = 'One or more profile fields are missing';
      return;
    }
    const mail = sessionStorage.getItem('mail');
    if (mail) {
      this.abonne.mail = mail;
      this._api.createAbonne(this.abonne).subscribe(
        (res: any) => {
          console.log('Response:', res);
          if (res.status === 'success') {
            console.log('Data inserted successfully.');
            this.router.navigate(['/compte']);
          } else {
            console.error('Error:', res.message);
          }
        },
        err => {
          console.error('Error:', err);
        }
      );
    } else {
      console.log('No email found in sessionStorage');
    }
  }  
}
