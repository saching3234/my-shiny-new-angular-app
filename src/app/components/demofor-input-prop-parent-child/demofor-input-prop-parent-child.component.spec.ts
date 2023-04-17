import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoforInputPropParentChildComponent } from './demofor-input-prop-parent-child.component';

describe('DemoforInputPropParentChildComponent', () => {
  let component: DemoforInputPropParentChildComponent;
  let fixture: ComponentFixture<DemoforInputPropParentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoforInputPropParentChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoforInputPropParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
