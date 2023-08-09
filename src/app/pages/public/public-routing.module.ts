import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { DemandeComponent } from './demande/demande.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {  
    path: '', component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'demande', component: DemandeComponent },
      { path: 'vehicule', component: VehiculeComponent},
      { path: 'profil', component: ProfilComponent}
    ] 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
