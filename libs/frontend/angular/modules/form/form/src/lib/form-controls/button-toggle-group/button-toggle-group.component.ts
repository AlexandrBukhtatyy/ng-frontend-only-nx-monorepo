import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface BtnPickerOption {
  id: string | number;
  label: string;
}

@Component({
  selector: 'app-button-toggle-group',
  templateUrl: './button-toggle-group.component.html',
  styleUrls: ['./button-toggle-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonToggleGroupComponent),
      multi: true,
    },
  ],
})
export class ButtonToggleGroupComponent implements OnInit, ControlValueAccessor {
  @Input() options!: BtnPickerOption[];

  selectedOption!: BtnPickerOption;

  isDisabled!: boolean;

  onChange = (_: any) => {};

  onBlur = (_: any) => {};

  constructor() {}

  ngOnInit() {}

  writeValue(value: BtnPickerOption) {
    this.selectedOption = value;
  }

  registerOnChange(fn: (_: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: any) => void) {
    this.onBlur = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  changeOption(option: BtnPickerOption) {
    this.selectedOption = option;
    this.onChange(option);
  }
}
