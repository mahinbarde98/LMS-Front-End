import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancategoryComponent } from './loancategory.component';

describe('LoancategoryComponent', () => {
  let component: LoancategoryComponent;
  let fixture: ComponentFixture<LoancategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoancategoryComponent]
    });
    fixture = TestBed.createComponent(LoancategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
