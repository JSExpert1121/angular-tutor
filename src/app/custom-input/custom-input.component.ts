import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-custom-input',
	templateUrl: './custom-input.component.html',
	styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

	@Input() val: string;
	@Output() valChange = new EventEmitter<string>();


	constructor() { }

	ngOnInit() { }

	change($event) {
		this.valChange.emit($event.target.value);
	}
}
