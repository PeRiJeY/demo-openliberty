import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Elements
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

// My components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceCheckComponent } from './service-check/service-check.component';
import { NgHomeComponent } from './ng-home/ng-home.component';
import { ServiceStatusComponent } from './service-status/service-status.component';

@NgModule({
	declarations: [
		AppComponent,
		ServiceCheckComponent,
		NgHomeComponent,
		ServiceStatusComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
