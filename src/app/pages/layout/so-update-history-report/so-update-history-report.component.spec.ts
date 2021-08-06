import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoUpdateHistoryReportComponent } from './so-update-history-report.component';

describe('SoUpdateHistoryReportComponent', () => {
  let component: SoUpdateHistoryReportComponent;
  let fixture: ComponentFixture<SoUpdateHistoryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoUpdateHistoryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoUpdateHistoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
