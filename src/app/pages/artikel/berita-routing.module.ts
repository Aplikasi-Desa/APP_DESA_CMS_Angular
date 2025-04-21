import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeritaComponent } from './berita/berita.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
    {
        path: "agenda",
        component: AgendaComponent,
    },
    {
        path: "berita",
        component: BeritaComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BeritaRoutingModule { }
