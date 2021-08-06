import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherChargeRuleConfigurationComponent } from './other-charge-rule-configuration.component';

describe('OtherChargeRuleConfigurationComponent', () => {
  let component: OtherChargeRuleConfigurationComponent;
  let fixture: ComponentFixture<OtherChargeRuleConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherChargeRuleConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherChargeRuleConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
