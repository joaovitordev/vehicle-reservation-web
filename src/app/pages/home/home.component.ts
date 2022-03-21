import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {}

  openModal() {
    this.dialog.open(SignInComponent, {
      width: '25%',
      height: '50%',
    });
  }

  isUser() {
    if(localStorage.getItem('userId')) {
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
  }

  myReservations() {
    this.router.navigate(['minhas-reservas'])
  }

}
