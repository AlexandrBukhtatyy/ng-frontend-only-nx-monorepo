import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTemplateWithHintComponent } from './option-template-with-hint.component';

describe('OptionTemplateWithHintComponent', () => {
  let component: OptionTemplateWithHintComponent;
  let fixture: ComponentFixture<OptionTemplateWithHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionTemplateWithHintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionTemplateWithHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
