import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  displayVisiMisi: any;
  
    constructor(
      private modalService: NgbModal
    ) {}

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Pemerintahan' },
      { label: 'Visi Misi', active: true }
    ];
  }

  ModalVisiMisi(modalFilter: any) {
    this.displayVisiMisi = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
