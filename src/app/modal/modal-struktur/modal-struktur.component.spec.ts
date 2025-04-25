import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStrukturComponent } from './modal-struktur.component';

describe('ModalStrukturComponent', () => {
  let component: ModalStrukturComponent;
  let fixture: ComponentFixture<ModalStrukturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStrukturComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalStrukturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
