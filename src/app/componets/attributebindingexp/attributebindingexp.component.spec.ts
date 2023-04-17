import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributebindingexpComponent } from './attributebindingexp.component';

describe('AttributebindingexpComponent', () => {
  let component: AttributebindingexpComponent;
  let fixture: ComponentFixture<AttributebindingexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributebindingexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributebindingexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
