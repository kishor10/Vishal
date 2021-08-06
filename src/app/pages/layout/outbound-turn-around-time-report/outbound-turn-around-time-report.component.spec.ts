import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundTurnAroundTimeReportComponent } from './outbound-turn-around-time-report.component';

describe('OutboundTurnAroundTimeReportComponent', () => {
  let component: OutboundTurnAroundTimeReportComponent;
  let fixture: ComponentFixture<OutboundTurnAroundTimeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboundTurnAroundTimeReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundTurnAroundTimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
