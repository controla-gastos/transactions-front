import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTransactionComponent } from './add-transaction.component';

const routes: Routes = [
  { path: '', component: AddTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTransactionRoutingModule { }
