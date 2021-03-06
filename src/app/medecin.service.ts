import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  private REST_API_SERVER = "http://localhost:8080/medecin";

  constructor(public http: HttpClient) { }

  public findAll(){
    return this.http.get<any>(this.REST_API_SERVER + '/all');
  }
  public saveOrUpdate(medecin: any){
    return this.http.post<any>(this.REST_API_SERVER + '/add', medecin);
  }

  public delete(medecin_id: any){
    return this.http.get<any>(this.REST_API_SERVER + '/delete?id=' + medecin_id);
  }
}
