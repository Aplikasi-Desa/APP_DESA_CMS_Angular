import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  displayAnggaran: any;
    
    constructor(
      private modalService: NgbModal
    ) {}

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Data Desa' },
      { label: 'Anggaran', active: true }
    ];
  }

  ModalAnggaran(modalFilter: any) {
    this.displayAnggaran = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
