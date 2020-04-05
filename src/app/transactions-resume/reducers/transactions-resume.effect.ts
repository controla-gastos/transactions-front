import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { getTransactionsResume, getTransactionsResumeSuccess } from './transactions-resume.actions';
import { TransactionService } from 'src/app/services/transaction.service';

@Injectable()
export class TransactionsResumeEffect {

    getTransactionsResume$ = createEffect(() => this.actions$.pipe(
        ofType(getTransactionsResume),
        mergeMap(() => this.transactionService.getTransactions({limit: 5})
            .pipe(
                map((response: any) => getTransactionsResumeSuccess(response.data)),
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
