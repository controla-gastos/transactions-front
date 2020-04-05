import { createAction } from '@ngrx/store';

import { Transaction } from 'src/app/models/transaction';
import { Params } from 'src/app/models/params';

export const getTags = createAction('[ExtractTransaction] getTags');

export const getTagsSuccess = createAction('[ExtractTransactionState] getTagsSuccess', 
    (tags: string[]) => ({tags}));

export const getTransactions = createAction('[ExtractTransaction] getTransactions', (params: Params) => ({params}));

export const getTransactionsSuccess = createAction('[ExtractTransaction] getTransactionsSuccess', 
    (transactions: Transaction[]) => ({transactions}));
    