import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesaComponent } from './desa/desa.component';
import { PendudukComponent } from './penduduk/penduduk.component';
import { WilayahComponent } from './wilayah/wilayah.component';
import { AnggaranComponent } from './anggaran/anggaran.component';


const routes: Routes = [
    {
        path: "desa",
        component: DesaComponent,
    },
    {
        path: "penduduk",
        component: PendudukComponent,
    },
    {
        path: "wilayah",
        component: WilayahComponent,
    },
    {
        path: "anggaran",
        component: AnggaranComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DataDesaRoutingModule { }
