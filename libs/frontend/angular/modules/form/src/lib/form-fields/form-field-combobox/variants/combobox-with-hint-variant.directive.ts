import {Directive} from '@angular/core';
import {FormFieldComboboxComponent} from "@ngnx/frontend/angular/modules/form";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {
  WithHintOptionTemplateComponent
} from '../../form-field-select/templates/with-hint-option-template/with-hint-option-template.component';
import {
  WithHintValueTemplateComponent
} from '../../form-field-select/templates/with-hint-value-template/with-hint-value-template.component';

@Directive({
  selector: 'ngnx-form-field-combobox[withHint]',
  standalone: true
})
export class ComboboxWithHintVariantDirective {

  constructor(private formFieldComboboxComponent: FormFieldComboboxComponent<any>) {
    formFieldComboboxComponent.itemContent = new PolymorpheusComponent(WithHintOptionTemplateComponent);
    formFieldComboboxComponent.valueContent = new PolymorpheusComponent(WithHintValueTemplateComponent);
  }

}
