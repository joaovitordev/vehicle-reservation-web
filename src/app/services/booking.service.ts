
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiServer = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  booking(booking: any): Observable<any> {
    const token = localStorage.getItem('accessToken')
    return this.http.post(`${this.apiServer}/booking`, booking,  { headers: { 'Authorization': token }})
  }

  unbooking(userId: string): Observable<any> {
    const token = localStorage.getItem('accessToken')

    return this.http.delete(`${this.apiServer}/user/${userId}/vehicles`, { headers: { 'Authorization': token } })
  }

}
