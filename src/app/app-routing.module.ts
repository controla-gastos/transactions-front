import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'prefix', loadChildren: () =>
      import('./transactions-resume/transactions-resume.module').then(m => m.TransactionsResumeModule)
  },
  {
    path: 'transactions/extract', loadChildren: () =>
      import('./extract-transactions/extract-transactions.module').then(m => m.ExtractTransactionsModule)
  },
  {
    path: 'transactions/add', loadChildren: () =>
      import('./add-transaction/add-transaction.module').then(m => m.AddTransactionModule)
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
