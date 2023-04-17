import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInAttrDirComponent } from './built-in-attr-dir.component';

describe('BuiltInAttrDirComponent', () => {
  let component: BuiltInAttrDirComponent;
  let fixture: ComponentFixture<BuiltInAttrDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInAttrDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInAttrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
