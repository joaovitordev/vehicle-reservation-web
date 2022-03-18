import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatCardModule

    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatCardModule,
        MatFormFieldModule,
    ],
    declarations: [],
})
export class CustomMaterialModule { }
