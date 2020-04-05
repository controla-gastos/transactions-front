export interface Transaction {
    id?: string;
    description: string;
    tags: string[];
    value: number;
    emitter: string;
    date: string;
    month: number;
    year: number;
}