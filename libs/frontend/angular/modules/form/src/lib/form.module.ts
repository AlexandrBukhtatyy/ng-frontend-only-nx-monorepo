import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldSelectComponent } from './form-fields/form-field-select/form-field-select.component';
import { FormFieldComboboxComponent } from './form-fields/form-field-combobox/form-field-combobox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormFieldSelectComponent, FormFieldComboboxComponent],
})
export class FormModule {}
