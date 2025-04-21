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
import { SharedModule } from '../../shared/shared.module';
import { DataDesaRoutingModule } from './data-desa-routing.module';
import { DesaComponent } from './desa/desa.component';
import { WilayahComponent } from './wilayah/wilayah.component';
import { PendudukComponent } from './penduduk/penduduk.component';
import { AnggaranComponent } from './anggaran/anggaran.component';

@NgModule({
  declarations: [
  
    DesaComponent,
       WilayahComponent,
       PendudukComponent,
       AnggaranComponent
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
    DataDesaRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DataDesaModule { }
