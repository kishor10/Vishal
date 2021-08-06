import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportGroupComponent } from './create-report-group.component';

describe('CreateReportGroupComponent', () => {
  let component: CreateReportGroupComponent;
  let fixture: ComponentFixture<CreateReportGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
