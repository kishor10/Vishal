import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackReportComponent } from './pack-report.component';

describe('PackReportComponent', () => {
  let component: PackReportComponent;
  let fixture: ComponentFixture<PackReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
