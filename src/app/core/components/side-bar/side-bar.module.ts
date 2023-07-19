import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarHeaderComponent } from './side-bar-header/side-bar-header.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SideBarFooterComponent } from './side-bar-footer/side-bar-footer.component';

@NgModule({
    declarations: [
        SideBarComponent,
        SideBarHeaderComponent,
        SideMenuItemComponent,
        SideBarFooterComponent,
    ],
    imports: [ 
        CommonModule,
        SharedModule 
    ],
    exports: [
        SideBarComponent,
    ],
    providers: [],
})
export class SideBarModule {}