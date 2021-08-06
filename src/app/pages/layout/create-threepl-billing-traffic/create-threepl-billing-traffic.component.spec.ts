import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThreeplBillingTrafficComponent } from './create-threepl-billing-traffic.component';

describe('CreateThreeplBillingTrafficComponent', () => {
  let component: CreateThreeplBillingTrafficComponent;
  let fixture: ComponentFixture<CreateThreeplBillingTrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThreeplBillingTrafficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThreeplBillingTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
