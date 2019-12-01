import { Component, OnInit, Input } from '@angular/core';
import { interval } from "rxjs/internal/observable/interval";

import { ApiClientService, ResourceHealth } from '../api-client.service';

@Component({
	selector: 'app-service-status',
	templateUrl: './service-status.component.html',
	styleUrls: ['./service-status.component.scss']
})
export class ServiceStatusComponent implements OnInit {

	@Input() service: string;

	name = '-';
	hostname = '-';
	version = '-';
	status = '-';
	lastResponse = null;

	constructor(private apiClientService: ApiClientService) { }

	ngOnInit() {
		this.refresh();
		interval(3000).subscribe(() => this.refresh());
	}

	refresh() {
		this.apiClientService.getServiceStatus(this.service).subscribe((data: ResourceHealth) => {
			//  console.log(data);
			this.name = data.checks.length > 0 ? data.checks[0].name : "N/A";
			this.status = data.checks.length > 0 ? data.checks[0].status : "DOWN";
			this.hostname = data.checks.length > 0 ? data.checks[0].data.hostname : null;
			this.version = data.checks.length > 0 ? data.checks[0].data.version : null;
			this.lastResponse = data.checks.length > 0 ? data.checks[0].data.time : null;

		}, () => {
			this.name = "error";
			this.status = "DOWN";
			this.hostname = "error";
			this.version = "error";
			this.lastResponse = null;
		});
	}

}
