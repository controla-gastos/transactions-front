import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { getTags, getTagsSuccess, getTransactions, getTransactionsSuccess } from './extract-transactions.actions';
import { TransactionService } from '../../services/transaction.service';

@Injectable()
export class ExtractTransactionsEffect {

    getTagsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(getTags),
        mergeMap(() => this.transactionService.getTags()
            .pipe(
                map((response: any) => getTagsSuccess(response.data)),
                catchError(() => EMPTY)
            )
        )
    ));

    getTransactionsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(getTransactions),
        mergeMap((action) => this.transactionService.getTransactions(action.params)
            .pipe(
                map((response: any) => getTransactionsSuccess(response.data)),
                catchError(() => EMPTY)
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private transactionService: TransactionService,
    ) {
    }
}
