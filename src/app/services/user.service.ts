import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServer = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  signUp(signUp: UserModel): Observable<any> {
    return this.http.post(`${this.apiServer}/user/signUp`, signUp);
  }

  signIn(signIn: Partial<UserModel>): Observable<any>  {
    return this.http.post(`${this.apiServer}/user/signIn`, signIn);
  }

  myBooking(userId: string): Observable<any>  {
    const token = localStorage.getItem('accessToken')
    return this.http.get(`${this.apiServer}/user/${userId}/vehicles`, { headers: { 'Authorization': token } })
  }

}
