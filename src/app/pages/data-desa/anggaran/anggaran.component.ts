import { Component } from '@angular/core';

@Component({
  selector: 'app-anggaran',
  templateUrl: './anggaran.component.html',
  styleUrls: ['./anggaran.component.scss']
})
export class AnggaranComponent {
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
      { label: 'Anggaran', active: true }
    ];
  }
}
