import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { VerificationComponent } from './verification/verification.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: AgentComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'verification', component: VerificationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
