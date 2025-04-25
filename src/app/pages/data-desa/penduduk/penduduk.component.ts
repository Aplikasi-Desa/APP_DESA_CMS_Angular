import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-penduduk',
  templateUrl: './penduduk.component.html',
  styleUrls: ['./penduduk.component.scss']
})
export class PendudukComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;
  displayPenduduk: any;
    
      constructor(
        private modalService: NgbModal
      ) {}

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Data Desa' },
      { label: 'Penduduk', active: true }
    ];
  }

  ModalPenduduk(modalFilter: any) {
    this.displayPenduduk = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
