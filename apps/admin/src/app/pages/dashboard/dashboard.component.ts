import {Component, inject} from '@angular/core';
import {
  FormFieldSelectComponent
} from "@ngnx/frontend/angular/modules/form";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'ngnx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    FormFieldSelectComponent,
    ReactiveFormsModule
  ],
  standalone: true
})
export class DashboardComponent {
  private fb = inject(FormBuilder)
  formGroup = this.fb.group({
    selectExample: this.fb.control(null)
  })
}
