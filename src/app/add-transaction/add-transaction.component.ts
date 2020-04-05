import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import * as moment from 'moment';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';


@Component({
  selector: 'transactions-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  form: FormGroup;
  tagsControl: FormControl = new FormControl();
  tags: string[];

  constructor(private formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private location: Location) {
    this.tags = [];
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder
      .group({
        description: new FormControl('', [Validators.required]),
        value: new FormControl(0, [Validators.required]),
        date: new FormControl(null, [Validators.required]),
        emitter: new FormControl(null, [Validators.required])
      });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.isFieldTouched(field);
  }

  isFieldTouched(field: string) {
    return this.form.get(field).touched;
  }

  addTag() {
    const index: number = this.tags
      .findIndex(t => t == this.tagsControl.value)
    if (index < 0) {
      this.tags.push(this.tagsControl.value)
      this.tagsControl.setValue('');
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  onSubmit() {
    if (this.form.valid) {
      const date = moment(this.form.value.date);
      const transaction: Transaction = {
        description: this.form.value.description,
        tags: this.tags,
        value: this.form.value.value,
        emitter: this.form.value.emitter,
        date: date.format('YYYY-MM-DD'),
        month: date.month() + 1,
        year: date.year()
      };
      this.transactionService
        .addTransactions(transaction)
        .subscribe(() => this.location.go('/'))
    } else {
      this.validateAllFormFields();
    }
  }

  validateAllFormFields() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
