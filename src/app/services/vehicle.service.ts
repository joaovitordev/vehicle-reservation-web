
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiServer = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<any> {
    return this.http.get(`${this.apiServer}/vehicles`);
  }

  createVehicles(): Observable<any> {
    return this.http.post(`${this.apiServer}/vehicles`, {})
  }
}
