import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeplInvoiceReportComponent } from './threepl-invoice-report.component';

describe('ThreeplInvoiceReportComponent', () => {
  let component: ThreeplInvoiceReportComponent;
  let fixture: ComponentFixture<ThreeplInvoiceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeplInvoiceReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeplInvoiceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
