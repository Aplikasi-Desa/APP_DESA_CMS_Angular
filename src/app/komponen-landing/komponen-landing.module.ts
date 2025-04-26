import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { KomponenLandingRoutingModule } from './komponen-landing-routing.module';
import { BlogComponent } from './blog/blog.component';
import { CandidateComponent } from './candidate/candidate.component';
import { FindjobsComponent } from './findjobs/findjobs.component';
import { JobFooterComponent } from './job-footer/job-footer.component';
import { JobcategoriesComponent } from './jobcategories/jobcategories.component';
import { ProgressComponent } from './progress/progress.component';
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
    BlogComponent,
    CandidateComponent,
    FindjobsComponent,
    JobFooterComponent,
    JobcategoriesComponent,
    ProgressComponent
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
    SwiperModule,
    KomponenLandingRoutingModule
  ],
  exports: [
    BlogComponent,
    CandidateComponent,
    FindjobsComponent,
    JobFooterComponent,
    JobcategoriesComponent,
    ProgressComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class KomponenLandingModule { }
