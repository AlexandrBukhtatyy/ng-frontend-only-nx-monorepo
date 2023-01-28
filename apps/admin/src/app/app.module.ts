import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TuiButtonModule, TuiRootModule} from "@taiga-ui/core";
import {
  FormFiledTextareaComponent
} from "../../../../libs/frontend/angular/modules/form/form/src/lib/form-fields/form-filed-textarea/form-filed-textarea.component";
import {ReactiveFormsModule} from "@angular/forms";
import {
  FormFieldDateComponent
} from "../../../../libs/frontend/angular/modules/form/form/src/lib/form-fields/form-field-date/form-field-date.component";
import {TuiPortalModule} from "@taiga-ui/cdk";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiButtonModule,
    TuiPortalModule,
    FormFiledTextareaComponent,
    ReactiveFormsModule,
    FormFieldDateComponent,
    TuiRootModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
