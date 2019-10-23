import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';

@Component({
	selector: 'app-binding-page',
	templateUrl: './binding-page.component.html',
	styleUrls: ['./binding-page.component.scss']
})
export class BindingPageComponent implements OnInit {

	title: string;
	myHero: string;
	inValue: string;

	heroes = [
		new Hero(1, 'Windstorm'),
		new Hero(13, 'Bombasto'),
		new Hero(15, 'Magneta'),
		new Hero(20, 'Tornado')
	];

	imageUrl = 'https://i.stack.imgur.com/eIekV.png';
	textColor = true;

	constructor() {
		this.title = 'Angular-Tutor';
		this.myHero = 'Windstorm';
		this.inValue = 'Sample data';
	}

	ngOnInit() { }
}
