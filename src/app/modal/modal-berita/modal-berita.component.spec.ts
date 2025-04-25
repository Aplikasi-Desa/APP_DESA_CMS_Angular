import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBeritaComponent } from './modal-berita.component';

describe('ModalBeritaComponent', () => {
  let component: ModalBeritaComponent;
  let fixture: ComponentFixture<ModalBeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBeritaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
