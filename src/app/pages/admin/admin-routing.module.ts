import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./home/home.component";
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { RoleComponent } from './role/role.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'proprietaires', component: ProprietaireComponent },
      { path: 'vehicules', component: VehiculeComponent },
      { path: 'roles', component: RoleComponent },
      { path: 'documents', component: DocumentsComponent }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
