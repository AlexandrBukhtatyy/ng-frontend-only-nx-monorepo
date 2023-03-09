import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'ngnx-option-template-with-hint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-template-with-hint.component.html',
  styleUrls: ['./option-template-with-hint.component.scss'],
})
export class OptionTemplateWithHintComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: any, active: boolean }
  ) {
  }
}
