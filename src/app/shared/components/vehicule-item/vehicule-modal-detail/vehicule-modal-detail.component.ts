import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vehicule-modal-detail',
  templateUrl: './vehicule-modal-detail.component.html',
  styles: [
  ]
})
export class VehiculeModalDetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialog: any) { }

}
