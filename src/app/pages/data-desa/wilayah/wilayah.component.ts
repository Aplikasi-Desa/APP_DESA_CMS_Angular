import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wilayah',
  templateUrl: './wilayah.component.html',
  styleUrls: ['./wilayah.component.scss']
})
export class WilayahComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;
  displayWilayah: any;
    
      constructor(
        private modalService: NgbModal
      ) {}

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Data Desa' },
      { label: 'Wilayah', active: true }
    ];
  }

  ModalWilayah(modalFilter: any) {
    this.displayWilayah = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
