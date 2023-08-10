import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SvgModule } from './svg/svg.module';
import { ProprietaireItemModule } from './components/proprietaire-item/proprietaire-item.module';
import { VehiculeItemModule } from './components/vehicule-item/vehicule-item.module';
import { AddMotoComponent } from './components/add-moto/add-moto.component';

@NgModule({
    imports: [ 
        CommonModule,
        SvgModule,
        MaterialModule,
        ProprietaireItemModule,
        VehiculeItemModule,
        AddMotoComponent
    ],
    exports: [
        MaterialModule,
        SvgModule,
        ProprietaireItemModule,
        VehiculeItemModule,
        
    ],
    declarations: [
  ],
})
export class SharedModule {}