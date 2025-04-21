import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;
}
