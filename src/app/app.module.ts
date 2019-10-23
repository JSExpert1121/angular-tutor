import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
