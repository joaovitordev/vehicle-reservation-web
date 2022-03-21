import { VehiclesAvailableComponent } from './reservations/vehicles-available/vehicles-available.component';
import { MyReservationsComponent } from './reservations/my-reservations/my-reservations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '',   redirectTo: 'veiculos', pathMatch: 'full' },
      { path: 'veiculos', component: VehiclesAvailableComponent },
      { path: 'minhas-reservas', component: MyReservationsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
