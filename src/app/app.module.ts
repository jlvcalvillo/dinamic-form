import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { Bootstrap4FrameworkModule } from 'angular7-json-schema-form';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    Bootstrap4FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
