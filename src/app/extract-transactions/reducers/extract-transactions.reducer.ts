import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import { getTags, getTagsSuccess, getTransactions, getTransactionsSuccess } from './extract-transactions.actions';
import { ExtractTransactionState, initialState } from './extract-transactions.state';

const _extractTransactionsReducer = createReducer(initialState,
    on(getTags, (state, action): ExtractTransactionState => Object.assign({}, state, { loading: true })),
    on(getTagsSuccess, (state, action): ExtractTransactionState => Object.assign({}, state, { loading: false, tags: action.tags })),
    on(getTransactions, (state, action): ExtractTransactionState => Object.assign({}, state, { loading: true })),
    on(getTransactionsSuccess, (state, action): ExtractTransactionState => Object.assign({}, state, { loading: false, transactions: action.transactions }))
);

export function extractTransactionsReducer(state, action) {
    return _extractTransactionsReducer(state, action);
};

export const getExtractTransactionsFeature = createFeatureSelector<any>('extractTransactions');

export const getTagsState = createSelector(
    getExtractTransactionsFeature,
    (feature) => feature ? feature.extractTransactionsFeature.tags: []
);

export const getTransactionsState = createSelector(
    getExtractTransactionsFeature,
    (feature) => feature ? feature.extractTransactionsFeature.transactions: []
);

