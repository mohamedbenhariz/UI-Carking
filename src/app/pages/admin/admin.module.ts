import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {NavBarModule} from "../../core/components/nav-bar/nav-bar.module";
import { HomeComponent } from './home/home.component';
import { SideBarModule } from 'src/app/core/components/side-bar/side-bar.module';
import { PageHeaderModule } from 'src/app/core/components/page-header/page-header.module';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { RoleComponent } from './role/role.component';
import { DocumentsComponent } from './documents/documents.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehiculeDocumentsItemModule } from 'src/app/shared/components/vehicule-documents-item/vehicule-documents-item.module';
import { FormComponent } from './vehicule/form/form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    ProprietaireComponent,
    VehiculeComponent,
    RoleComponent,
    DocumentsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SideBarModule,
    NavBarModule,
    PageHeaderModule,
    SharedModule,
    VehiculeDocumentsItemModule,
    MatDialogModule,
    MatProgressBarModule,
  ]
})
export class AdminModule { }
