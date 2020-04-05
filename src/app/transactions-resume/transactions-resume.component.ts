import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TransactionResumeState } from './reducers/transactions-resume.state';
import { getTransactionsResume } from './reducers/transactions-resume.actions';
import { Transaction } from '../models/transaction';
import { getTransactionsResumeState } from './reducers/transactions-resume.reducer';

@Component({
  selector: 'transactions-transactions-resume',
  templateUrl: './transactions-resume.component.html',
  styleUrls: ['./transactions-resume.component.scss']
})
export class TransactionsResumeComponent implements OnInit {

  $transactions: Observable<Transaction[]>;

  constructor(private store: Store<TransactionResumeState>) { 
    this.$transactions = this.store.select(getTransactionsResumeState)
  }

  ngOnInit(): void {
    this.store.dispatch(getTransactionsResume());
  }

  teste() {
    alert('djdijpods')
  }

}
