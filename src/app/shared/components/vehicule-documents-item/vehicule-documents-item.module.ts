import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeDocumentsItemComponent } from './vehicule-documents-item.component';
import { DocumentItemComponent } from './document-item/document-item.component';
import { DocumentItemShowComponent } from './document-item-show/document-item-show.component';
import { SvgModule } from '../../svg/svg.module';



@NgModule({
  declarations: [
    VehiculeDocumentsItemComponent,
    DocumentItemComponent,
    DocumentItemShowComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [
    DocumentItemComponent,
    VehiculeDocumentsItemComponent
  ]
})
export class VehiculeDocumentsItemModule { }
