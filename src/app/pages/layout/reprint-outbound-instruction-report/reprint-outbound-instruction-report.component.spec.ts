import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprintOutboundInstructionReportComponent } from './reprint-outbound-instruction-report.component';

describe('ReprintOutboundInstructionReportComponent', () => {
  let component: ReprintOutboundInstructionReportComponent;
  let fixture: ComponentFixture<ReprintOutboundInstructionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprintOutboundInstructionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprintOutboundInstructionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
