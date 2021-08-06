import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGateInwardwiseChargeRuleComponent } from './create-gate-inwardwise-charge-rule.component';

describe('CreateGateInwardwiseChargeRuleComponent', () => {
  let component: CreateGateInwardwiseChargeRuleComponent;
  let fixture: ComponentFixture<CreateGateInwardwiseChargeRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGateInwardwiseChargeRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGateInwardwiseChargeRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
