import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsResumeComponent } from './transactions-resume.component';

describe('TransactionsResumeComponent', () => {
  let component: TransactionsResumeComponent;
  let fixture: ComponentFixture<TransactionsResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
