import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTemplateForm } from './booking-template-form';

describe('BookingTemplateForm', () => {
  let component: BookingTemplateForm;
  let fixture: ComponentFixture<BookingTemplateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTemplateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTemplateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
