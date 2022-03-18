import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SignInComponent>,
  ) { }

  hide = true;
  form: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
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

}
