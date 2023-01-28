import { Component, Input } from '@angular/core';
import { FormFieldBase } from '../../core/form-field.class';

@Component({
  selector: 'app-form-filed-textarea',
  templateUrl: './form-filed-textarea.component.html',
  styleUrls: ['./form-filed-textarea.component.css'],
})
export class FormFiledTextareaComponent extends FormFieldBase {
  @Input() label: string;
  @Input() placeholder: string;
}
