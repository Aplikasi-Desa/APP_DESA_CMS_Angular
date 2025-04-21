import { Component } from '@angular/core';

@Component({
  selector: 'app-desa',
  templateUrl: './desa.component.html',
  styleUrls: ['./desa.component.scss']
})
export class DesaComponent {
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
      { label: 'Desa', active: true }
    ];
  }
}
