import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  displayDesa: any;
  
    constructor(
      private modalService: NgbModal
    ) {}
  
  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Data Desa' },
      { label: 'Desa', active: true }
    ];
  }

  ModalDesa(modalFilter: any) {
    this.displayDesa = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
