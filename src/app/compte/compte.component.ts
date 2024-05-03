import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  abonnes: any[] = [];

  constructor(public _api: ApiService) {}

  ngOnInit(): void {
    const mail = sessionStorage.getItem('mail');   
    console.log('User email:', mail);
    if (mail) {
      this._api.getAllAbonne().subscribe(
        (res: any) => {
          console.log('API response:', res);  
          this.abonnes = res;
          console.log('Assigned abonnes:', this.abonnes);
        },
        err => {
          console.log('API error:', err);
        } 
      );
    } else {
      console.error('SessionStorageService is not injected');
    }
  }
}
