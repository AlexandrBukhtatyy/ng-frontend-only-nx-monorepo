import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'ngnx-option-template-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-template-default.component.html',
  styleUrls: ['./option-template-default.component.scss'],
})
export class OptionTemplateDefaultComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: any, active: boolean }
  ) {
  }
}
