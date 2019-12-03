import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgHomeComponent } from './ng-home/ng-home.component';
import { ServiceCheckComponent } from './service-check/service-check.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';

const routes: Routes = [
	{ path: '', redirectTo: 'service-check', pathMatch: 'full' },
	{ path: 'home', component: NgHomeComponent },
	{ path: 'client', component: ClientPortalComponent },
	{ path: 'service-check', component: ServiceCheckComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
