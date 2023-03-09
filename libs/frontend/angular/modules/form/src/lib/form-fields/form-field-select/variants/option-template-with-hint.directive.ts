import {Directive} from '@angular/core';
import {FormFieldSelectComponent} from "@ngnx/frontend/angular/modules/form";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {
  OptionTemplateWithHintComponent
} from "../templates/option-template-with-hint/option-template-with-hint.component";
import {ValueTemplateWithHintComponent} from "../templates/value-template-with-hint/value-template-with-hint.component";

@Directive({
  selector: '[ngnxOptionTemplateWithHint]',
  standalone: true
})
export class OptionTemplateWithHintDirective {

  constructor(private formFieldSelectComponent: FormFieldSelectComponent<any>) {
    formFieldSelectComponent.itemContent = new PolymorpheusComponent(OptionTemplateWithHintComponent);
    formFieldSelectComponent.valueContent = new PolymorpheusComponent(ValueTemplateWithHintComponent);
  }

}
