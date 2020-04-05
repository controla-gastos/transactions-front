import { Transaction } from 'src/app/models/transaction';

export interface ExtractTransactionState {
    tags: string[];
    transactions: Transaction[];
    loading: boolean;
};

export const initialState: ExtractTransactionState = {
    tags: [],
    transactions: [],
    loading: false
}
