import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingexpComponent } from './classbindingexp.component';

describe('ClassbindingexpComponent', () => {
  let component: ClassbindingexpComponent;
  let fixture: ComponentFixture<ClassbindingexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassbindingexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassbindingexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
