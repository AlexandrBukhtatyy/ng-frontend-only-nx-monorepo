import {Component, inject} from '@angular/core';
import {
  ComboboxDataProvider,
  ComboboxDataProviderDirective,
  FormFieldComboboxComponent,
  FormFieldSelectComponent, SelectWithHintVariantDirective
} from "@ngnx/frontend/angular/modules/form";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {
  ComboboxWithHintVariantDirective
} from "../../../../../../libs/frontend/angular/modules/form/src/lib/form-fields/form-field-combobox/variants/combobox-with-hint-variant.directive";
import {Observable, of} from "rxjs";

@Component({
  selector: 'ngnx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    FormFieldSelectComponent,
    ReactiveFormsModule,
    SelectWithHintVariantDirective,
    FormFieldComboboxComponent,
    ComboboxWithHintVariantDirective,
    ComboboxDataProviderDirective
  ],
  standalone: true
})
export class DashboardComponent {
  private fb = inject(FormBuilder)
  formGroup = this.fb.group({
    selectExample: this.fb.control(null),
    comboboxExample: this.fb.control(null),
  })
  selectItems = [
    {id: '1', label: 'Label 1'},
    {id: '2', label: 'Label 2'},
    {id: '3', label: 'Label 3'},
    {id: '4', label: 'Label 4'},
  ];

  selectItemsWithHints = [
    {id: '1', label: 'Label 1'},
    {id: '2', label: 'Label 2'},
    {id: '3', label: 'Label 3'},
    {id: '4', label: 'Label 4'},
  ];

  comboboxStringify(item: {label: string}): string {
    return item.label;
  }

  comboboxDataProvider: ComboboxDataProvider<any> = (term: string) => {
    const foundedItems = this.selectItemsWithHints.filter((item) => term == '' || item.label.toLowerCase() == term.toLowerCase() || item.label.toLowerCase().includes(term.toLowerCase()));
    return foundedItems && foundedItems.length ? of(foundedItems) : of(null);
  }
}
