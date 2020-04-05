import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';

import { TransactionsResumeRoutingModule } from './transactions-resume-routing.module';
import { TransactionsResumeComponent } from './transactions-resume.component';
import { transactionResumeReducer } from './reducers/transactions-resume.reducer';
import { TransactionService } from '../services/transaction.service';
import { TransactionsResumeEffect } from './reducers/transactions-resume.effect';

@NgModule({
  declarations: [TransactionsResumeComponent],
  imports: [
    CommonModule,
    TransactionsResumeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    StoreModule.forFeature('transactionResume',
    { transactionResumeFeature: transactionResumeReducer }),
    EffectsModule.forFeature([TransactionsResumeEffect])
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionsResumeModule { }
