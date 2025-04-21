import { Component } from '@angular/core';

@Component({
  selector: 'app-penduduk',
  templateUrl: './penduduk.component.html',
  styleUrls: ['./penduduk.component.scss']
})
export class PendudukComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Data Desa' },
      { label: 'Penduduk', active: true }
    ];
  }
}
