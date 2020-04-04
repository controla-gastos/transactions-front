import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'transactions-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  
  title = 'transactions';
  
  ngOnDestroy(): void {
    document
      .getElementById('single-spa-application:transactions')
      .innerHTML = '';
  }

}
