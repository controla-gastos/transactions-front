import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtractTransactionsComponent } from './extract-transactions.component';

const routes: Routes = [
  {path: '', component: ExtractTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtractTransactionsRoutingModule { }
