import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../../../../services/vehicle.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-vehicles-available',
  templateUrl: './vehicles-available.component.html',
  styleUrls: ['./vehicles-available.component.scss']
})
export class VehiclesAvailableComponent implements OnInit {

  constructor(
    private vehiclesService: VehicleService,
    private bookingService: BookingService,
    private userService: UserService
  ) { }

  cars;

  ngOnInit(): void {
    this.getVehicles();
  }

  async getVehicles() {
    this.cars = await this.vehiclesService.getVehicles().toPromise()
    console.log(this.cars)
  }

  async booking(vehicleId: string) {

    const request = {
      vehicleId: vehicleId,
      userId: localStorage.getItem('userId'),
      accessToken: localStorage.getItem('accessToken')
    }

    await this.bookingService.booking(request).toPromise().then((res) => {
      console.log(res)
    })
  }

}
