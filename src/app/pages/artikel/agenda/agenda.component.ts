import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  displayAgenda: any;

  constructor(
    private modalService: NgbModal
  ) {}
  
  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Artikel'},
      { label: 'Agenda', active: true }
    ];
  }

  ModalAgenda(modalFilter: any) {
    this.displayAgenda = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
