import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeItemComponent } from './vehicule-item.component';
import { VehiculeModalDetailComponent } from './vehicule-modal-detail/vehicule-modal-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SvgModule } from '../../svg/svg.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    VehiculeItemComponent,
    VehiculeModalDetailComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    SvgModule,
    MatIconModule
  ],
  exports: [
    VehiculeItemComponent,
    VehiculeModalDetailComponent
  ]
})
export class VehiculeItemModule { }
