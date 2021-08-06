import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThreeplChargeLogComponent } from './create-threepl-charge-log.component';

describe('CreateThreeplChargeLogComponent', () => {
  let component: CreateThreeplChargeLogComponent;
  let fixture: ComponentFixture<CreateThreeplChargeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThreeplChargeLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThreeplChargeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
