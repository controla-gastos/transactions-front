import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractTransactionsComponent } from './extract-transactions.component';

describe('ExtractTransactionsComponent', () => {
  let component: ExtractTransactionsComponent;
  let fixture: ComponentFixture<ExtractTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
