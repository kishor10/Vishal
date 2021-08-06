import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixChargeRuleConfigurationComponent } from './fix-charge-rule-configuration.component';

describe('FixChargeRuleConfigurationComponent', () => {
  let component: FixChargeRuleConfigurationComponent;
  let fixture: ComponentFixture<FixChargeRuleConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixChargeRuleConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixChargeRuleConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
