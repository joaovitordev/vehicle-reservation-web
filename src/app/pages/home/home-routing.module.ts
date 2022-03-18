import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '',   redirectTo: '/reservations', pathMatch: 'full' },
      { path: 'reservations', component: ReservationsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
