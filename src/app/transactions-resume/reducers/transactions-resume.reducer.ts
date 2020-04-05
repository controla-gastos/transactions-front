import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import { getTransactionsResume, getTransactionsResumeSuccess } from './transactions-resume.actions';
import { TransactionResumeState, initialState } from './transactions-resume.state';

const _transactionResumeReducer = createReducer(initialState,
    on(getTransactionsResume, (state, action): TransactionResumeState => Object.assign({}, state, { loading: true })),
    on(getTransactionsResumeSuccess, (state, action): TransactionResumeState => Object.assign({}, state, { loading: false, transactions: action.transactions })),
);

export function transactionResumeReducer(state, action) {
    return _transactionResumeReducer(state, action);
};

export const getTransactionResumeFeature = createFeatureSelector<any>('transactionResume');

export const getTransactionsResumeState = createSelector(
    getTransactionResumeFeature,
    (feature) => feature ? feature.transactionResumeFeature.transactions: []
);
