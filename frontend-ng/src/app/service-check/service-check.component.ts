import { Component, OnInit } from '@angular/core';

import { environment } from './../../environments/environment';

@Component({
	selector: 'app-service-check',
	templateUrl: './service-check.component.html',
	styleUrls: ['./service-check.component.scss']
})
export class ServiceCheckComponent implements OnInit {

	services = [
		environment.urlServiceA,
		environment.urlServiceB,
		environment.urlServiceC,
		environment.urlServiceA,
		environment.urlServiceB,
		environment.urlServiceC];

	constructor() { }

	ngOnInit() { }

}
