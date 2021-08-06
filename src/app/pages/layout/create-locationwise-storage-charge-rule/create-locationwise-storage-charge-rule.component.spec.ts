import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationwiseStorageChargeRuleComponent } from './create-locationwise-storage-charge-rule.component';

describe('CreateLocationwiseStorageChargeRuleComponent', () => {
  let component: CreateLocationwiseStorageChargeRuleComponent;
  let fixture: ComponentFixture<CreateLocationwiseStorageChargeRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLocationwiseStorageChargeRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocationwiseStorageChargeRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
