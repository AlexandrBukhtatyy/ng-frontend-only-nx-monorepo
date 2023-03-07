import { Component } from '@angular/core';
import {FormFieldBase} from "../../core/form-field.class";
import {TuiDataListWrapperModule, TuiFieldErrorPipeModule, TuiSelectModule} from "@taiga-ui/kit";
import {TuiErrorModule, TuiTextfieldControllerModule, TuiValueContentContext} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'ngnx-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.scss'],
  standalone: true,
  imports: [
    TuiSelectModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiDataListWrapperModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    AsyncPipe
  ]
})
export class FormFieldSelectComponent extends FormFieldBase {
  items: any[] | null = null;
  placeholder?: string = 'Choose your hero';
  valueContent: PolymorpheusContent<TuiValueContentContext<any>>;
  itemContent: PolymorpheusContent<TuiValueContentContext<any>>;
}
