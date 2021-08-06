import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOutboundInstructionReportPackComponent } from './report-outbound-instruction-report-pack.component';

describe('ReportOutboundInstructionReportPackComponent', () => {
  let component: ReportOutboundInstructionReportPackComponent;
  let fixture: ComponentFixture<ReportOutboundInstructionReportPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOutboundInstructionReportPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOutboundInstructionReportPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
