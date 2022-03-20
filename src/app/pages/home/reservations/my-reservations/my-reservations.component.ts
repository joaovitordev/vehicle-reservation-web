import { Component, OnInit } from '@angular/core';
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
    private bookingService: BookingService
    ) { }

  car;

  ngOnInit(): void {
    this.getMyReservations()
  }

  async getMyReservations()  {
    const userId = localStorage.getItem('userId')
    this.car = await this.userService.myBooking(userId).toPromise();
    console.log(this.car)
  }

  async unbooking(vehicleId: string) {
    const userId = localStorage.getItem('userId')

    await this.bookingService.unbooking(userId).toPromise().then(() => {
      console.log('devolveu')
    })
  }

}
