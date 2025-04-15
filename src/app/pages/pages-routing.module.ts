import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { PenggunaDesaComponent } from './pengguna-desa/pengguna-desa.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { HakAksesComponent } from './hak-akses/hak-akses.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "pendes",
    component: PenggunaDesaComponent
  },
  {
    path: "monitoring",
    component: MonitoringComponent
  },
  {
    path: "hakakses",
    component: HakAksesComponent
  },
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
