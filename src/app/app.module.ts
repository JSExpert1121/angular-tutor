import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { SvgComponent } from './svg/svg.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BindingPageComponent } from './pages/binding-page/binding-page.component';
import { LifecyclePageComponent } from './pages/lifecycle-page/lifecycle-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
	declarations: [
		AppComponent,
		CustomInputComponent,
		SvgComponent,
		NavbarComponent,
		BindingPageComponent,
		LifecyclePageComponent,
		HomePageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
