import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'transactions-extract-transactions',
  templateUrl: './extract-transactions.component.html',
  styleUrls: ['./extract-transactions.component.scss']
})
export class ExtractTransactionsComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit() {
  }

}
