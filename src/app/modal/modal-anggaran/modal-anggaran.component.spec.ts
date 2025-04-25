import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnggaranComponent } from './modal-anggaran.component';

describe('ModalAnggaranComponent', () => {
  let component: ModalAnggaranComponent;
  let fixture: ComponentFixture<ModalAnggaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnggaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAnggaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
