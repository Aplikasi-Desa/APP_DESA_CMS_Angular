import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingDesaComponent } from './landing-desa/landing-desa.component';

// Component Pages


const routes: Routes = [
  {
    path: "landing-desa",
    component: LandingDesaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
