import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillingCategoryComponent } from './create-billing-category.component';

describe('CreateBillingCategoryComponent', () => {
  let component: CreateBillingCategoryComponent;
  let fixture: ComponentFixture<CreateBillingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBillingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
