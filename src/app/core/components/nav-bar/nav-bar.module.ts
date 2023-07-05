import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
    declarations: [
        NavBarComponent,
    ],
    imports: [ CommonModule ],
    exports: [
        NavBarComponent,
    ],
    providers: [],
})
export class NavBarModule {}