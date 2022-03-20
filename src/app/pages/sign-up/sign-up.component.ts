import { UserService } from './../../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signup$: Subscription

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<SignInComponent>,
  ) { }

  hide = true;
  form: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  goToSignIn() {
    this.dialogRef.close();

    this.dialog.open(SignInComponent, {
      width: '25%',
      height: '50%',
    });
  }

  async onSubmit() {
    const user: UserModel = this.form.getRawValue();
    await this.userService.signUp(user).toPromise().then(() => {
      this.dialogRef.close();

      this.dialog.open(SignInComponent, {
        width: '25%',
        height: '50%',
      });
    })
  }
}
