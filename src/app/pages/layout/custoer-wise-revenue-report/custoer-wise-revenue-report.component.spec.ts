import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoerWiseRevenueReportComponent } from './custoer-wise-revenue-report.component';

describe('CustoerWiseRevenueReportComponent', () => {
  let component: CustoerWiseRevenueReportComponent;
  let fixture: ComponentFixture<CustoerWiseRevenueReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustoerWiseRevenueReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoerWiseRevenueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
