import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ExtractTransactionsRoutingModule } from './extract-transactions-routing.module';
import { ExtractTransactionsComponent } from './extract-transactions.component';
import { extractTransactionsReducer } from './reducers/extract-transactions.reducer';
import { ExtractTransactionsEffect } from './reducers/extract-transactions.effect';

@NgModule({
  declarations: [ExtractTransactionsComponent],
  imports: [
    CommonModule,
    ExtractTransactionsRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    StoreModule.forFeature('extractTransactions',
    { extractTransactionsFeature: extractTransactionsReducer }),
    EffectsModule.forFeature([ExtractTransactionsEffect])
  ]
})
export class ExtractTransactionsModule { }
