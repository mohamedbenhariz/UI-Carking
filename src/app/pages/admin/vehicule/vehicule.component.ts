import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMotoComponent } from 'src/app/shared/components/add-moto/add-moto.component';

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
      date: '09/08/2023'
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
      date: '20/07/2023'
    },
    {
      image: '',
      name: 'moto samsung',
      code: '30',
      date: '20/07/2023'
    },
  ]

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddMotoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
