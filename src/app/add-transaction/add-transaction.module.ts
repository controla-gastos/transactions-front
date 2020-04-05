import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTransactionRoutingModule } from './add-transaction-routing.module';
import { AddTransactionComponent } from './add-transaction.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { TransactionService } from '../services/transaction.service';

@NgModule({
  declarations: [AddTransactionComponent],
  imports: [
    CommonModule,
    AddTransactionRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    TransactionService
  ]
})
export class AddTransactionModule { }
