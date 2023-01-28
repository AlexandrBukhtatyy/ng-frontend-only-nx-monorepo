import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field-checkbox-list',
  templateUrl: './form-field-checkbox-list.component.html',
  styleUrls: ['./form-field-checkbox-list.component.css'],
})
export class FormFieldCheckboxListComponent {
  @Input() dictionary: any;

  get form(): FormGroup {
    return this.controlContainerRef.control as FormGroup;
  }

  get list(): FormArray {
    return this.controlContainerRef.control as FormArray;
  }

  constructor(@Optional() private controlContainerRef: ControlContainer) {}
}
