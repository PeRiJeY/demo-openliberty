import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Component({
	selector: 'app-client-portal',
	templateUrl: './client-portal.component.html',
	styleUrls: ['./client-portal.component.scss']
})
export class ClientPortalComponent implements OnInit {

	requestResult: string;
	listUrl = environment.listTestServices;
	selectedUrl: string;
	authorizationValue = '';

	constructor(private httpClient: HttpClient) { }

	ngOnInit() {
	}

	onClickButton(url: string) {
		console.log(url);
		console.log(this.authorizationValue);
		let headers = new HttpHeaders();
		if (this.authorizationValue) {
			headers = headers.set('Authorization', 'Bearer ' + this.authorizationValue);
		}

		this.httpClient.get(url, { headers, responseType: 'text' }).subscribe((data) => {
			this.requestResult = data;
		}, (error: HttpErrorResponse) => {
			console.log(error);
			this.requestResult = error.message;
		});
	}

	updateTextArea(ev) {
		try {
			this.authorizationValue = ev.target.value;
		} catch (e) {
			console.error('Could not set textarea-value');
		}
	}
}
