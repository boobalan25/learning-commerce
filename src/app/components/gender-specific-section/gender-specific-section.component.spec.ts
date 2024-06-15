import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderSpecificSectionComponent } from './gender-specific-section.component';

describe('GenderSpecificSectionComponent', () => {
  let component: GenderSpecificSectionComponent;
  let fixture: ComponentFixture<GenderSpecificSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderSpecificSectionComponent]
    });
    fixture = TestBed.createComponent(GenderSpecificSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
