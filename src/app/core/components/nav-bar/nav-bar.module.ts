import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import {SvgModule} from "../../../shared/svg/svg.module";

@NgModule({
    declarations: [
        NavBarComponent,
    ],
    imports: [
      CommonModule,
      SvgModule
    ],
    exports: [
        NavBarComponent,
    ],
    providers: [],
})
export class NavBarModule {}
