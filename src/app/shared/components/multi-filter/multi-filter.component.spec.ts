import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFilterComponent } from './multi-filter.component';

describe('MultiFilterComponent', () => {
  let component: MultiFilterComponent;
  let fixture: ComponentFixture<MultiFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiFilterComponent]
    });
    fixture = TestBed.createComponent(MultiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
