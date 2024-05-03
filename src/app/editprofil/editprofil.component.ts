import { Component, OnInit } from '@angular/core'; // Importez OnInit
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css'] // Corrected typo here
})
export class EditprofilComponent implements OnInit { // Implémentez OnInit
  abonne: any[] = [];
  a = {
    nom: '',
    prenom: '',
    age: 0,
    taille: 0,
    poids: 0,
    objectif: '',
    tel:'',
    pass:''
  };

  constructor(public _api: ApiService) {}

  changernom(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updatenom(this.a.nom).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("nom updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );
  }

  changerprenom(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updateprenom(this.a.prenom).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("prenom updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );
  }

  changerage(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updateage(this.a.age).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("age updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );
  }

  changertaille(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updatetaille(this.a.taille).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("taille updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );
  }

  changerpoids(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updatepoids(this.a.poids).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("poids updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );
  }

  changerobjectif(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updateobjectif(this.a.objectif).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("objectif updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );  
  }
  changertel(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updatetel(this.a.tel).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("tel updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );  
  }
  changerpassword(): void {
    const mail = sessionStorage.getItem('mail');
    console.log("Data to be sent:", this.a); 
    this._api.updatepassword(this.a.pass).subscribe(
      res => {
        console.log(res); 
        this.ngOnInit(); 
        alert("password updated successfuly")
      },
      err => {
        console.log(err); 
      }
    );  
  }

  ngOnInit(): void {
    const mail = sessionStorage.getItem('mail');
    console.log('User email:', mail);
  
    if (mail) {
      this._api.getAbonne().subscribe(
        (res: any) => {
          console.log('Response from API:', res); // Add this line
          if (res && res.length > 0) {
            const firstAbonne = res[0];
            this.a.nom = firstAbonne.nom;
            this.a.prenom = firstAbonne.prenom;
            this.a.age = firstAbonne.age;
            this.a.taille = firstAbonne.taille;
            this.a.poids = firstAbonne.poids;
            this.a.objectif = firstAbonne.objectif;
            this.a.tel = firstAbonne.tel;
          }
          else {
            console.log('No data found for the user.');
            // Display a message to the user indicating that their profile data couldn't be retrieved.
        }
        },
        err => {
          console.log('API error:', err);
        } 
      );
    }
  }
} 