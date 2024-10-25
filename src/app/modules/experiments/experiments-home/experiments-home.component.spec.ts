import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsHomeComponent } from './experiments-home.component';

describe('ExperimentsHomeComponent', () => {
  let component: ExperimentsHomeComponent;
  let fixture: ComponentFixture<ExperimentsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperimentsHomeComponent]
    });
    fixture = TestBed.createComponent(ExperimentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
