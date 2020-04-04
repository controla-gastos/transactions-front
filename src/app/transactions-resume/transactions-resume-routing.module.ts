import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsResumeComponent } from './transactions-resume.component';

const routes: Routes = [
  {path:'', component: TransactionsResumeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsResumeRoutingModule { }
