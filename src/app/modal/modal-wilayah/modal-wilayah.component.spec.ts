import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWilayahComponent } from './modal-wilayah.component';

describe('ModalWilayahComponent', () => {
  let component: ModalWilayahComponent;
  let fixture: ComponentFixture<ModalWilayahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWilayahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWilayahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
