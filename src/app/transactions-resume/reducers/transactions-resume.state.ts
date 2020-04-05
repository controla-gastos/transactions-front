import { Transaction } from 'src/app/models/transaction';

export interface TransactionResumeState {
    transactions: Transaction[];
    loading: boolean;
};

export const initialState: TransactionResumeState = {
    transactions: [],
    loading: false
}
