import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActivityChargeRuleComponent } from './create-activity-charge-rule.component';

describe('CreateActivityChargeRuleComponent', () => {
  let component: CreateActivityChargeRuleComponent;
  let fixture: ComponentFixture<CreateActivityChargeRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateActivityChargeRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActivityChargeRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
