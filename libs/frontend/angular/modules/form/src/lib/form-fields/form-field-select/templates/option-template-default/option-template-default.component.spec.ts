import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTemplateDefaultComponent } from './option-template-default.component';

describe('OptionTemplateDefaultComponent', () => {
  let component: OptionTemplateDefaultComponent;
  let fixture: ComponentFixture<OptionTemplateDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionTemplateDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionTemplateDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
