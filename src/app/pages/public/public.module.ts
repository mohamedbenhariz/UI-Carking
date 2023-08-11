import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavBarModule } from 'src/app/core/components/nav-bar/nav-bar.module';
import { PublicNavComponent } from './public-nav/public-nav.component';
import { DemandeComponent } from './demande/demande.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ProfilComponent } from './profil/profil.component';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from '../admin/vehicule/form/form.component';
import { FormDeclarationComponent } from './home/form-declaration/form-declaration.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    PublicNavComponent,
    DemandeComponent,
    VehiculeComponent,
    ProfilComponent,
    FormComponent,
    FormDeclarationComponent,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    NavBarModule,
    MatDialogModule
    
  ]
})
export class PublicModule { }
