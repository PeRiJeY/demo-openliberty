import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Elements
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


// My components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceCheckComponent } from './service-check/service-check.component';
import { NgHomeComponent } from './ng-home/ng-home.component';
import { ServiceStatusComponent } from './service-status/service-status.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';

@NgModule({
	declarations: [
		AppComponent,
		ServiceCheckComponent,
		NgHomeComponent,
		ServiceStatusComponent,
		ClientPortalComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatListModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
