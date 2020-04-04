import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { TransactionsResumeRoutingModule } from './transactions-resume-routing.module';
import { TransactionsResumeComponent } from './transactions-resume.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TransactionsResumeComponent],
  imports: [
    CommonModule,
    TransactionsResumeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class TransactionsResumeModule { }
