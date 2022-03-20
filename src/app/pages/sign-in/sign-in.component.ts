import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
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
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  goToSignUp() {
    this.dialogRef.close();

    this.dialog.open(SignUpComponent, {
      width: '25%',
      height: '60%',
    });
  }

  async onSubmit() {
    const user = this.form.getRawValue()

    await this.userService.signIn(user).toPromise().then((res: any) => {
      this.dialogRef.close();
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('userId', res._id);
    })
  }

}
