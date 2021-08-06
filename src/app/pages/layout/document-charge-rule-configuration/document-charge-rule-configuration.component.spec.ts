import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentChargeRuleConfigurationComponent } from './document-charge-rule-configuration.component';

describe('DocumentChargeRuleConfigurationComponent', () => {
  let component: DocumentChargeRuleConfigurationComponent;
  let fixture: ComponentFixture<DocumentChargeRuleConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentChargeRuleConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentChargeRuleConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
