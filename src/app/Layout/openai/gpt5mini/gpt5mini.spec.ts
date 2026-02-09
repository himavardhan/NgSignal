import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPT5mini } from './gpt5mini';

describe('GPT5mini', () => {
  let component: GPT5mini;
  let fixture: ComponentFixture<GPT5mini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GPT5mini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPT5mini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
