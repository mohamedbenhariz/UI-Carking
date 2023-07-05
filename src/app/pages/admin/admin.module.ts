import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {SideBarModule} from "../../core/components/side-bar/side-bar.module";
import {NavBarModule} from "../../core/components/nav-bar/nav-bar.module";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SideBarModule,
    NavBarModule,
  ]
})
export class AdminModule { }
