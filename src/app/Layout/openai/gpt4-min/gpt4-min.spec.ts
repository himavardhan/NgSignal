import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPT4Min } from './gpt4-min';

describe('GPT4Min', () => {
  let component: GPT4Min;
  let fixture: ComponentFixture<GPT4Min>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GPT4Min]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPT4Min);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
