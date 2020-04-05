import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as moment from 'moment';
moment.locale('pt-br');

import { ExtractTransactionState } from './reducers/extract-transactions.state';
import { getTagsState, getTransactionsState } from './reducers/extract-transactions.reducer';
import { getTags, getTransactions } from './reducers/extract-transactions.actions';
import { Transaction } from '../models/transaction';
import { Params } from '../models/params';

@Component({
  selector: 'transactions-extract-transactions',
  templateUrl: './extract-transactions.component.html',
  styleUrls: ['./extract-transactions.component.scss']
})
export class ExtractTransactionsComponent implements OnInit, OnDestroy {

  tagsControl = new FormControl();
  monthsControl = new FormControl();
  descriptionControl = new FormControl();
  $tags: Observable<string[]>;
  tagsOnChangeSubs: Subscription;
  monthOnChangeSubs: Subscription;
  descriptionChangeSubs: Subscription;
  $transactions: Observable<Transaction[]>;
  months: any[];
  params: Params;

  constructor(private store: Store<ExtractTransactionState>) {
    this.$tags = this.store.select(getTagsState);
    this.$transactions = this.store.select(getTransactionsState);
    this.months = [];
    const now = moment();
    this.params = {
      month: now.month() + 1,
      year: now.year()
    }
  }

  ngOnInit() {
    this.store.dispatch(getTags());
    this.store.dispatch(getTransactions(this.params));
    this.initMonths();
    this.tagsOnChange();
    this.monthsOnChange();
    this.descriptionOnChange();
  }

  tagsOnChange() {
    this.tagsOnChangeSubs = this.tagsControl
      .valueChanges
      .subscribe(values => {
        this.params = Object.assign({}, this.params, {
          tags: values

        });
        this.store.dispatch(getTransactions(this.params))
      }
      );
  }

  monthsOnChange() {
    this.monthOnChangeSubs = this.monthsControl
      .valueChanges
      .subscribe(value => {
        this.params = Object.assign({}, this.params, {
          month: value.month() + 1,
          year: value.year()
        });
        this.store.dispatch(getTransactions(this.params));
      });
  }

  descriptionOnChange() {
    this.descriptionChangeSubs = this.descriptionControl
      .valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.params = Object.assign({}, this.params, {
          description: value,
        });
        this.store.dispatch(getTransactions(this.params));
      });
  }

  initMonths() {
    const now = moment();

    for (var i = 0; i < 12; i++) {
      const date = moment(
        `${now.year()}-${now.month() + 1}-01`,
        'YYYY-MM-DD');
      this.months.push(date);
      now.subtract('month', 1);
    }
  }

  ngOnDestroy(): void {
    this.tagsOnChangeSubs
      .unsubscribe();
    this.monthOnChangeSubs
      .unsubscribe();
    this.descriptionChangeSubs
      .unsubscribe();
  }

}
