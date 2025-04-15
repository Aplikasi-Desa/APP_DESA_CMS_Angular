import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbToastModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { ToastsContainer } from './dashboards/dashboard/toasts-container.component';
import { DashboardsModule } from "./dashboards/dashboards.module";
import { PenggunaDesaComponent } from './pengguna-desa/pengguna-desa.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { HakAksesComponent } from './hak-akses/hak-akses.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer,
    PenggunaDesaComponent,
    MonitoringComponent,
    HakAksesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgApexchartsModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    PagesRoutingModule,
    SharedModule,
    DashboardsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
