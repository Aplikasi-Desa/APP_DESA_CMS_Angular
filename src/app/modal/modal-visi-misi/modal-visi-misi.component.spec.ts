import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVisiMisiComponent } from './modal-visi-misi.component';

describe('ModalVisiMisiComponent', () => {
  let component: ModalVisiMisiComponent;
  let fixture: ComponentFixture<ModalVisiMisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVisiMisiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVisiMisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
