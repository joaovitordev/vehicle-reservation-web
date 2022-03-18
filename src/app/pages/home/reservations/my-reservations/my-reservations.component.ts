import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss']
})
export class MyReservationsComponent implements OnInit {

  constructor() { }

  car = {
    model: "Honda Civic",
    type: "Sedan",
    description: "2013, preto, flex, moto 1.6, 5 lugares",
    imageUrl: "https://i.ibb.co/jb87mGC/civic.png"
  }

  ngOnInit(): void {
  }

}
