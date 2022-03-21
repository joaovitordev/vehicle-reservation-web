
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { BookingService } from 'src/app/services/booking.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss']
})
export class MyReservationsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private bookingService: BookingService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  vehicle: any;

  ngOnInit(): void {
    this.getMyReservations()
  }

  isVehicle(vehicle) {
    if(vehicle.model) {
      return true;
    }

    return false;
  }

  async getMyReservations()  {
    const userId = localStorage.getItem('userId')

    this.vehicle = await this.userService.myBooking(userId).toPromise();
  }

  async unbooking(vehicleId: string) {
    const userId = localStorage.getItem('userId')

    await this.bookingService.unbooking(userId).toPromise().then(() => {
      this.openSnackBar('Veículo devolvido', 'Sucesso');
      this.goToHome();
    }).catch(res => {
      this.openSnackBar(res.error.error, 'Erro')
    })
  }

  goToHome() {
    this.router.navigate(['/'])
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

}
