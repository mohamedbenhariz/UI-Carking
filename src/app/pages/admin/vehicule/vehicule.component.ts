import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styles: [
  ]
})
export class VehiculeComponent {
  vehicules: any[] = [
    {
      image: '',
      name: 'moto sanili',
      code: '23',
      date: '12/07/2023'
    },
    {
      image: '',
      name: 'moto sanili dame',
      code: '27',
      date: '12/07/2023'
    },
    {
      image: '',
      name: 'moto ninfang dame',
      code: '30',
      date: '12/07/2023'
    },
    {
      image: '',
      name: 'moto samsung',
      code: '30',
      date: '12/07/2023'
    },
  ]
}
