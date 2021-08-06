import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStorageVolumeChargeRuleComponent } from './create-storage-volume-charge-rule.component';

describe('CreateStorageVolumeChargeRuleComponent', () => {
  let component: CreateStorageVolumeChargeRuleComponent;
  let fixture: ComponentFixture<CreateStorageVolumeChargeRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStorageVolumeChargeRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStorageVolumeChargeRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
