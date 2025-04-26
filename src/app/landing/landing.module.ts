import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule, NgbTooltipModule, NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LandingRoutingModule } from "./landing-routing.module";
import { SharedModule } from '../shared/shared.module';
import { LandingDesaComponent } from './landing-desa/landing-desa.component';
import { KomponenLandingModule } from "../komponen-landing/komponen-landing.module";

@NgModule({
  declarations: [
  
    LandingDesaComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    LandingRoutingModule,
    SharedModule,
    NgbTooltipModule,
    NgbCollapseModule,
    ScrollToModule.forRoot(),
    KomponenLandingModule
]
})
export class LandingModule { }
