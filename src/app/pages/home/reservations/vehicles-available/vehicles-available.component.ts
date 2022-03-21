import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../../../../services/vehicle.service';
import { BookingService } from 'src/app/services/booking.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vehicles-available',
  templateUrl: './vehicles-available.component.html',
  styleUrls: ['./vehicles-available.component.scss']
})
export class VehiclesAvailableComponent implements OnInit {

  constructor(
    private vehiclesService: VehicleService,
    private bookingService: BookingService,
    private snackBar: MatSnackBar
  ) { }

  vehicles: any;

  ngOnInit(): void {
    this.getVehicles();
  }

  async getVehicles() {
    this.vehicles = await this.vehiclesService.getVehicles().toPromise();

    this.createVehiclesDefault(this.vehicles);

  }

  async createVehiclesDefault(vehicles: any) {
    if(vehicles.length) {
      return;
    }

    await this.vehiclesService.createVehicles().toPromise();
    this.getVehicles();

  }

  async booking(vehicleId: string) {

    const request = {
      vehicleId: vehicleId,
      userId: localStorage.getItem('userId'),
      accessToken: localStorage.getItem('accessToken')
    }

    if(!request.userId) {
      this.openSnackBar('Faça o login para poder reservar', 'Erro');
      return;
    }

    await this.bookingService.booking(request).toPromise().then(() => {
      this.openSnackBar('Reserva realizada', 'Sucesso');
      this.getVehicles();
    }).catch((res => {
      this.openSnackBar(res.error.error, 'Erro')
    }))
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

}
