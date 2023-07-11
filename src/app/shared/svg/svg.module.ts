import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg.component';
import { DashboardIconComponent } from './dashboard-icon/dashboard-icon.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { BellIconComponent } from './bell-icon/bell-icon.component';
import { SeeIconComponent } from './see-icon/see-icon.component';
import { DeleteIconComponent } from './delete-icon/delete-icon.component';
import { DocumentIconComponent } from './document-icon/document-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { DownloadIconComponent } from './download-icon/download-icon.component';
import { BoxIconComponent } from './box-icon/box-icon.component';

@NgModule({
    declarations: [
        SvgComponent,
        DashboardIconComponent,
        AccountIconComponent,
        BellIconComponent,
        SeeIconComponent,
        DeleteIconComponent,
        DocumentIconComponent,
        MenuIconComponent,
        DownloadIconComponent,
        BoxIconComponent
    ],
    imports: [ CommonModule ],
    exports: [
        SvgComponent
    ],
    providers: [],
})
export class SvgModule {}