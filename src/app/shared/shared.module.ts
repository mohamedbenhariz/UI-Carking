import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SvgModule } from './svg/svg.module';
import { ProprietaireItemModule } from './components/proprietaire-item/proprietaire-item.module';
import { VehiculeItemModule } from './components/vehicule-item/vehicule-item.module';
@NgModule({
    declarations: [
  ],
    imports: [ 
        CommonModule,
        SvgModule,
        MaterialModule,
        ProprietaireItemModule,
        VehiculeItemModule
    ],
    exports: [
        MaterialModule,
        SvgModule,
        ProprietaireItemModule,
        VehiculeItemModule
    ],
})
export class SharedModule {}