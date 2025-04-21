import { Component } from '@angular/core';

@Component({
  selector: 'app-wilayah',
  templateUrl: './wilayah.component.html',
  styleUrls: ['./wilayah.component.scss']
})
export class WilayahComponent {
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
      { label: 'Wilayah', active: true }
    ];
  }
}
