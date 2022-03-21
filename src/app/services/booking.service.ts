
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiServer = 'http://localhost:3000';

  public token = localStorage.getItem('accessToken');

  constructor(private http: HttpClient) { }

  booking(booking: any): Observable<any> {
    return this.http.post(`${this.apiServer}/booking`, booking, { headers: { 'Authorization': this.token }})
  }

  unbooking(userId: string): Observable<any> {
    return this.http.delete(`${this.apiServer}/user/${userId}/vehicles`, { headers: { 'Authorization': this.token }})
  }

}
