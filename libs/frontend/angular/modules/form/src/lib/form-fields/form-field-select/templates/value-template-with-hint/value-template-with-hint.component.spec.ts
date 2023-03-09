import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTemplateWithHintComponent } from './value-template-with-hint.component';

describe('ValueTemplateWithHintComponent', () => {
  let component: ValueTemplateWithHintComponent;
  let fixture: ComponentFixture<ValueTemplateWithHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueTemplateWithHintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValueTemplateWithHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
