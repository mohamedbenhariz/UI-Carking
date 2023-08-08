import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { VerificationComponent } from './verification/verification.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AgentComponent,
    VerificationComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
