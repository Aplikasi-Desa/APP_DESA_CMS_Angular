import { Component } from '@angular/core';

@Component({
  selector: 'app-pengguna-desa',
  templateUrl: './pengguna-desa.component.html',
  styleUrls: ['./pengguna-desa.component.scss']
})
export class PenggunaDesaComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;
}
