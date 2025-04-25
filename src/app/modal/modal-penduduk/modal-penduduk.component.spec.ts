import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPendudukComponent } from './modal-penduduk.component';

describe('ModalPendudukComponent', () => {
  let component: ModalPendudukComponent;
  let fixture: ComponentFixture<ModalPendudukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPendudukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPendudukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
