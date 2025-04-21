import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { ArtikelComponent } from './artikel/artikel.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "artikel",
    component: ArtikelComponent
  },
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'pemerintahan', loadChildren: () => import('./pemerintahan/pemerintahan.module').then(m => m.PemerintahanModule)
  },
  {
    path: 'data-desa', loadChildren: () => import('./data-desa/data-desa.module').then(m => m.DataDesaModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
