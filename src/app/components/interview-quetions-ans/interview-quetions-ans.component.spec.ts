import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQuetionsAnsComponent } from './interview-quetions-ans.component';

describe('InterviewQuetionsAnsComponent', () => {
  let component: InterviewQuetionsAnsComponent;
  let fixture: ComponentFixture<InterviewQuetionsAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewQuetionsAnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewQuetionsAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
