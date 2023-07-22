import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VehiculeModalDetailComponent } from './vehicule-modal-detail/vehicule-modal-detail.component';

@Component({
  selector: 'app-vehicule-item',
  templateUrl: './vehicule-item.component.html',
  styles: [
  ]
})
export class VehiculeItemComponent {
  @Input() vehicule: any;

  constructor(private dialog: MatDialog) { }

  viewDetails(){
    this.dialog.open(VehiculeModalDetailComponent, {
      data: this.vehicule
    })
  }
}
