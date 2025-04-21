import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisiMisiComponent } from './visi-misi/visi-misi.component';
import { StrukturComponent } from './struktur/struktur.component';


const routes: Routes = [
    {
        path: "visi-misi",
        component: VisiMisiComponent,
    },
    {
        path: "struktur",
        component: StrukturComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PemerintahanRoutingModule { }
