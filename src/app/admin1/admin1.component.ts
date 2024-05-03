import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrl: './admin1.component.css'
})
export class Admin1Component {
  abonnes: any[]=[];

  constructor(public _api: ApiService) {}
  supprimer(mail: string){
    this._api.supression(mail).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => {
      console.log(err);
    });
  }


  ngOnInit(): void {
    this._api.getAll().subscribe(
      (res: any) => { 
        console.log('API Response:', res); // Log the API response
        this.abonnes = res;
      },
      err => {
        console.log('API error:', err);
      } 
    );
  }
  
}

