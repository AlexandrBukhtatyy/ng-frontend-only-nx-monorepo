import { Component, Input } from '@angular/core';
import { FormFieldBase } from '../../core/form-field.class';

@Component({
  selector: 'app-form-filed-number',
  templateUrl: './form-filed-number.component.html',
  styleUrls: ['./form-filed-number.component.css'],
})
export class FormFiledNumberComponent extends FormFieldBase {
  public defaultValue: any;
  @Input() label: string;
  @Input() placeholder: string;
}
