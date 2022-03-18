import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './material.module';

@NgModule({
    imports: [
    ],
    exports: [
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        CustomMaterialModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
    ],
    declarations: [],
})
export class ShareModule { }
