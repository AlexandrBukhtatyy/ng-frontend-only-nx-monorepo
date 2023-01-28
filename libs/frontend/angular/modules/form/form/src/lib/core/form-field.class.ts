import { Directive, OnInit, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  NgModel,
} from '@angular/forms';

@Directive()
export class FormFieldBase implements OnInit, ControlValueAccessor {
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  control!: FormControl;

  writeValue(obj: any): void {}
  registerOnChange(fn: (_: any) => void): void {}
  registerOnTouched(fn: any): void {}

  ngOnInit() {
    if (!this.ngControl) throw new Error('ngControl is undefined');

    if (this.ngControl instanceof FormControlName) {
      const formGroupDirective = this.ngControl
        .formDirective as FormGroupDirective;
      if (formGroupDirective) {
        this.control = formGroupDirective.form.controls[
        // @ts-ignore
          this.ngControl.name
        ] as FormControl;
      }
    } else if (this.ngControl instanceof FormControlDirective) {
      this.control = this.ngControl.control;
    } else if (this.ngControl instanceof NgModel) {
      this.control = this.ngControl.control;
      this.control.valueChanges.subscribe((x) =>
        this.ngControl.viewToModelUpdate(this.control.value)
      );
    } else if (!this.ngControl) {
      this.control = new FormControl();
    }
  }
}
