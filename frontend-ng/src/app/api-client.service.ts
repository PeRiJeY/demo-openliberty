import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiClientService {

	constructor(private httpClient: HttpClient) { }

	public getServiceStatus(service: string) {
		return this.httpClient.get<ResourceHealth>(service);
	}
}

export interface ResourceStatusData {
	hostname: string,
	version: string,
	time: Date
}
export interface ResourceStatus {
	name: string,
	status: string,
	data: ResourceStatusData
}
export interface ResourceHealth {
	checks: Array<ResourceStatus>,
	status: string
}
