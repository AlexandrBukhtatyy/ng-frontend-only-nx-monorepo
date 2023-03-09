import {Component, inject} from '@angular/core';
import {
  FormFieldSelectComponent, OptionTemplateWithHintDirective
} from "@ngnx/frontend/angular/modules/form";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'ngnx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    FormFieldSelectComponent,
    ReactiveFormsModule,
    OptionTemplateWithHintDirective
  ],
  standalone: true
})
export class DashboardComponent {
  private fb = inject(FormBuilder)
  formGroup = this.fb.group({
    selectExample: this.fb.control(null)
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
}
