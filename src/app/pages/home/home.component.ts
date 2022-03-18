import { Component, OnInit } from '@angular/core';
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
  ) { }

  username = 'João Vitor'

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(SignInComponent, {
      width: '25%',
      height: '50%',
    });
  }

}
