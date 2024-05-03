import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4433/api/';

  constructor(private httpClient: HttpClient) {}

  createAbonne(abonne: any) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'ajout.php', abonne);
  }

  createprofil(profil: any) {
    return this.httpClient.post(this.apiUrl + 'ajoutprofil.php', profil);
  }

  getAllAbonne() {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.get(this.apiUrl + 'getallabonne.php?mail=' + mail);
  }

  authentification(loginData: any) {
    return this.httpClient.post(this.apiUrl + 'authentification.php', loginData);
  }

  connectAdmin(admin: any) {
    return this.httpClient.post(this.apiUrl + 'admin.php', admin);
  }

  getAll() {
    return this.httpClient.get(this.apiUrl + 'abonne.php');
  }

  supression(mail: string) {
    return this.httpClient.delete(this.apiUrl + 'supression.php?mail=' + mail);
  }
  getAbonne() {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.get(this.apiUrl + 'getabonne.php?mail=' + mail);
  }
  updatenom(nom: string) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updatenom.php', { nom, mail });
  }
  updateprenom(prenom: string) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updateprenom.php', { prenom, mail });
  }
  updateage(age: number) {    
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updateage.php', { age, mail });
  }
  updatetaille(taille: number) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updatetaille.php', { taille, mail });
  }
  updatepoids(poids: number) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updatepoids.php', { poids, mail });
  }
  updateobjectif(objectif: string) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updateobjectif.php', { objectif, mail });
  }
  updatepassword(pass:string) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updatepassword.php', { pass, mail });
  }
  updatetel(tel: string) {
    const mail = sessionStorage.getItem('mail');
    return this.httpClient.post(this.apiUrl + 'updatetel.php', { tel, mail });
  }
}
