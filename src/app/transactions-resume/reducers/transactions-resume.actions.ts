import { createAction } from '@ngrx/store';
import { Transaction } from 'src/app/models/transaction';

export const getTransactionsResume = createAction('[TransactionsResume] getTransactionResume');
export const getTransactionsResumeSuccess = createAction('[TransactionsResume] getTransactionsResumeSuccess', 
    (transactions: Transaction[]) => ({transactions}));
