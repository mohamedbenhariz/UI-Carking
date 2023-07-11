import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarHeaderComponent } from './side-bar-header/side-bar-header.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import {SvgModule} from "../../../shared/svg/svg.module";

@NgModule({
    declarations: [
        SideBarComponent,
        SideBarHeaderComponent,
        SideMenuItemComponent,
    ],
    exports: [
      SideBarComponent,
    ],
    imports: [
      CommonModule,
      SvgModule
    ],
    providers: [],
})
export class SideBarModule {}
