import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  historics: any[] = [
    {
      id: 1,
      title: "Vehicules",
      quantity: 12,
      icon: "vehicule"
    },
    {
      id: 2,
      title: "Proprietaires",
      quantity: 22,
      icon: "agent"
    },
    {
      id: 3,
      title: "Declarations",
      quantity: 2,
      icon: "agent"
    },
    {
      id: 4,
      title: "Documents",
      quantity: 42,
      icon:"doc"
    }
  ]

}
