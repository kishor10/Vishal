import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePackComponent } from './generate-pack.component';

describe('GeneratePackComponent', () => {
  let component: GeneratePackComponent;
  let fixture: ComponentFixture<GeneratePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratePackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
