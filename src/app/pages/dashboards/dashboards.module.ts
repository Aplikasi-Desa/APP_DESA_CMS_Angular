import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CountToModule } from 'angular-count-to';
import { NgbDropdownModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

//Module
import { DashboardsRoutingModule } from "./dashboards-routing.module";
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    CountToModule,
    NgbToastModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    DashboardsRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DashboardsModule { }
