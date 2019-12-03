import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceCheckComponent } from './service-check/service-check.component';
import { ClientPortalComponent } from './client-portal/client-portal.component';

const routes: Routes = [
	{ path: '', redirectTo: 'client', pathMatch: 'full' },
	{ path: 'client', component: ClientPortalComponent },
	{ path: 'service-check', component: ServiceCheckComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
