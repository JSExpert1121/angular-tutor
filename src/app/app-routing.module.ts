import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindingPageComponent } from './pages/binding-page/binding-page.component';
import { LifecyclePageComponent } from './pages/lifecycle-page/lifecycle-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'binding', component: BindingPageComponent },
	{ path: 'lifecycle', component: LifecyclePageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
