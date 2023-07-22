import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProprietaireItemComponent } from './proprietaire-item.component';
import { ProprietaireModalDetailComponent } from './proprietaire-modal-detail/proprietaire-modal-detail.component';
import { SharedModule } from '../../shared.module';
import { SvgModule } from '../../svg/svg.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    ProprietaireItemComponent,
    ProprietaireModalDetailComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    ProprietaireItemComponent,
    ProprietaireModalDetailComponent,
  ]
})
export class ProprietaireItemModule { }
