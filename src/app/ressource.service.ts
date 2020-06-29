import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private REST_API_SERVER = "http://localhost:8080/resource";

  constructor(public http: HttpClient) { }

  public findServices(){
    return this.http.get<any>(this.REST_API_SERVER + '/services');
  }
  public findSpecialitesByService(serviceId: any){
    return this.http.get<any>(this.REST_API_SERVER + '/specialites?serviceid=' + serviceId);
  }

}
