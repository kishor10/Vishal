import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMiseIssueComponent } from './create-mise-issue.component';

describe('CreateMiseIssueComponent', () => {
  let component: CreateMiseIssueComponent;
  let fixture: ComponentFixture<CreateMiseIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMiseIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMiseIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
