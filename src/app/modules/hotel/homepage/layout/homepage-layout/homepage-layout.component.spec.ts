import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLayoutComponent } from './homepage-layout.component';

describe('HomepageLayoutComponent', () => {
  let component: HomepageLayoutComponent;
  let fixture: ComponentFixture<HomepageLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageLayoutComponent]
    });
    fixture = TestBed.createComponent(HomepageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
