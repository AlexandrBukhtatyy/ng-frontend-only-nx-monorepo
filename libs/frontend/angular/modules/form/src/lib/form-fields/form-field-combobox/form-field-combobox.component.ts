import { Component } from '@angular/core';
import {FormFieldBase} from "../../core/form-field.class";

@Component({
  selector: 'ngnx-form-field-combobox',
  templateUrl: './form-field-combobox.component.html',
  styleUrls: ['./form-field-combobox.component.scss'],
  standalone: true,
  imports: []
})
export class FormFieldComboboxComponent extends FormFieldBase {}
