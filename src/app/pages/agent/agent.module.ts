import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { VerificationComponent } from './verification/verification.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgentNavComponent } from './agent-nav/agent-nav.component';
import { NavBarModule } from 'src/app/core/components/nav-bar/nav-bar.module';
import { AgentComponent } from './agent.component';
import { SideBarModule } from 'src/app/core/components/side-bar/side-bar.module';


@NgModule({
  declarations: [
    AgentComponent,
    VerificationComponent,
    HomeComponent,
    AgentNavComponent,
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule,
    NavBarModule,
    SideBarModule,

  ]
})
export class AgentModule { }
