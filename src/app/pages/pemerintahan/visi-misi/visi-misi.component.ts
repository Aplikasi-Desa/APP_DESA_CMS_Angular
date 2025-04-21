import { Component } from '@angular/core';

@Component({
  selector: 'app-visi-misi',
  templateUrl: './visi-misi.component.html',
  styleUrls: ['./visi-misi.component.scss']
})
export class VisiMisiComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Pemerintahan' },
      { label: 'Visi Misi', active: true }
    ];
  }
}
