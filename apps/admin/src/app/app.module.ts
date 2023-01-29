import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TuiButtonModule, TuiRootModule} from '@taiga-ui/core';
import {
  FormFiledTextareaComponent
} from '@ngnx/frontend/angular/modules/form/form';
import {ReactiveFormsModule} from '@angular/forms';
import {
  FormFieldDateComponent
} from '@ngnx/frontend/angular/modules/form/form';
import {TuiPortalModule} from '@taiga-ui/cdk';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {routes} from './config/routes.const';
import {MainComponent} from './layouts/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiButtonModule,
    TuiPortalModule,
    FormFiledTextareaComponent,
    ReactiveFormsModule,
    FormFieldDateComponent,
    TuiRootModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {
}
