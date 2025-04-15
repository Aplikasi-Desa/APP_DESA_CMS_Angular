import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaDesaComponent } from './pengguna-desa.component';

describe('PenggunaDesaComponent', () => {
  let component: PenggunaDesaComponent;
  let fixture: ComponentFixture<PenggunaDesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenggunaDesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenggunaDesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
