import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.scss']
})
export class BeritaComponent {
  breadCrumbItems!: Array<{}>;
  data: any;
  page: any = 1;
  pageSize: any = 8;
  displayBerita: any;
  
    constructor(
      private modalService: NgbModal
    ) {}

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Artikel'},
      { label: 'Berita', active: true }
    ];
  }
  ModalBerita(modalFilter: any) {
    this.displayBerita = this.modalService.open(modalFilter, { size: 'lg', centered: true });
  }
}
