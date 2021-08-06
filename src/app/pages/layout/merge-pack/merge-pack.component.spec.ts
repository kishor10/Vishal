import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergePackComponent } from './merge-pack.component';

describe('MergePackComponent', () => {
  let component: MergePackComponent;
  let fixture: ComponentFixture<MergePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergePackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
