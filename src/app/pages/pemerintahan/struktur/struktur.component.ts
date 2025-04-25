import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  displayStruktur: any;
  
  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Pemerintahan' },
      { label: 'Struktur', active: true }
    ];
  }

  ModalStruktur(modalFilter: any) {
    this.displayStruktur = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
