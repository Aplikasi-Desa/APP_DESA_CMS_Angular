import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { AgendaComponent } from './agenda/agenda.component';
import { BeritaComponent } from './berita/berita.component';
import { ArtikelRoutingModule } from './artikel-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'src/app/modal/modal.module';

@NgModule({
  declarations: [
    AgendaComponent,
    BeritaComponent
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
    ArtikelRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ModalModule
],
schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ArtikelModule { }
