import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TuiButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
