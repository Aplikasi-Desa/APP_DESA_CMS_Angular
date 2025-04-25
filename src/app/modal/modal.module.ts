import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbToastModule, NgbDropdownModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../shared/shared.module';
import { ModalAgendaComponent } from './modal-agenda/modal-agenda.component';
import { ModalBeritaComponent } from './modal-berita/modal-berita.component';
import { ModalDesaComponent } from './modal-desa/modal-desa.component';
import { ModalPendudukComponent } from './modal-penduduk/modal-penduduk.component';
import { ModalWilayahComponent } from './modal-wilayah/modal-wilayah.component';


@NgModule({
  declarations: [
    ModalAgendaComponent,
    ModalBeritaComponent,
    ModalDesaComponent,
    ModalPendudukComponent,
    ModalWilayahComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    NgbToastModule,
    LeafletModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    NgApexchartsModule,
    NgSelectModule,
    SharedModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    NgbAlertModule,
    ModalRoutingModule,
  ],
  exports: [
    ModalAgendaComponent,
    ModalBeritaComponent,
    ModalDesaComponent,
    ModalPendudukComponent,
    ModalWilayahComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalModule { }
