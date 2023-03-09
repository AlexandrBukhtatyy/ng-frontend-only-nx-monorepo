import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'ngnx-value-template-with-hint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value-template-with-hint.component.html',
  styleUrls: ['./value-template-with-hint.component.scss'],
})
export class ValueTemplateWithHintComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: any, active: boolean }
  ) {
  }
}
