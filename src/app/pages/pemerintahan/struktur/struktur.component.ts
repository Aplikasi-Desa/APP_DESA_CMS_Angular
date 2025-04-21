import { Component } from '@angular/core';

@Component({
  selector: 'app-struktur',
  templateUrl: './struktur.component.html',
  styleUrls: ['./struktur.component.scss']
})
export class StrukturComponent {
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
      { label: 'Struktur', active: true }
    ];
  }
}
