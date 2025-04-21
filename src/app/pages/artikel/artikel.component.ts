import { Component } from '@angular/core';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.scss']
})
export class ArtikelComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;
}
