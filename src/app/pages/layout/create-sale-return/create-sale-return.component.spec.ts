import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSaleReturnComponent } from './create-sale-return.component';

describe('CreateSaleReturnComponent', () => {
  let component: CreateSaleReturnComponent;
  let fixture: ComponentFixture<CreateSaleReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSaleReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSaleReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
