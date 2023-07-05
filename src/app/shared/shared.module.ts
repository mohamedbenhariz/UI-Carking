import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SvgModule } from './svg/svg.module';

@NgModule({
    declarations: [
        
    ],
    imports: [ CommonModule ],
    exports: [
        MaterialModule
    ],
    providers: [
        MaterialModule,
        SvgModule
    ],
})
export class SharedModule {}