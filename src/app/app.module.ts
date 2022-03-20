import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from './shared/share.module';

import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyReservationsComponent } from './pages/home/reservations/my-reservations/my-reservations.component';
import { VehiclesAvailableComponent } from './pages/home/reservations/vehicles-available/vehicles-available.component';
import { ReservationsComponent } from './pages/home/reservations/reservations.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';

import { UserService } from '../app/services/user.service';
import { VehicleService } from '../app/services/vehicle.service';

@NgModule({
  declarations: [
    VehiclesAvailableComponent,
    MyReservationsComponent,
    ReservationsComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    ShareModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [UserService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
