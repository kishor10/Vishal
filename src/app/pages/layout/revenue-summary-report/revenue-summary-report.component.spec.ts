import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueSummaryReportComponent } from './revenue-summary-report.component';

describe('RevenueSummaryReportComponent', () => {
  let component: RevenueSummaryReportComponent;
  let fixture: ComponentFixture<RevenueSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueSummaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
