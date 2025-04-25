import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDesaComponent } from './modal-desa.component';

describe('ModalDesaComponent', () => {
  let component: ModalDesaComponent;
  let fixture: ComponentFixture<ModalDesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
