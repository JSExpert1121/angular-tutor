import { Component } from '@angular/core';

import { Hero } from './hero';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title: string;
	myHero: string;

	heroes = [
		new Hero(1, 'Windstorm'),
		new Hero(13, 'Bombasto'),
		new Hero(15, 'Magneta'),
		new Hero(20, 'Tornado')
	];

	constructor() {
		this.title = 'Angular-Tutor';
		this.myHero = 'Windstorm';
	}
}
