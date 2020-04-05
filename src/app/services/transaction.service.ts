import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Params } from '../models/params';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(protected http: HttpClient) { }

  getTransactions(params: Params) {

    let url = `${environment.urlTransactions}/getTransactions`;
    url += this.constructParams(params)

    return this.http
      .get(url);
  }

  private constructParams(params: Params) {

    const keys: string[] = Object.keys(params);

    let param: string = '?';

    keys.forEach((key, index) => {
      param += `${key}=${params[key].toString()}`;
      if (index != keys.length - 1) {
        param += '&';
      }
    });

    return param;

  }

  getTags() {
    return this.http
      .get(`${environment.urlTransactions}/getTags`);
  }

  addTransactions(trans: Transaction) {
    let url = `${environment.urlTransactions}/addTransaction`;
    return this.http.post(url, trans);
  }

}
