import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourseUtilizationDetailReportComponent } from './resourse-utilization-detail-report.component';

describe('ResourseUtilizationDetailReportComponent', () => {
  let component: ResourseUtilizationDetailReportComponent;
  let fixture: ComponentFixture<ResourseUtilizationDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourseUtilizationDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourseUtilizationDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
