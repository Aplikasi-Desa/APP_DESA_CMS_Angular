import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaComponent } from './desa.component';

describe('DesaComponent', () => {
  let component: DesaComponent;
  let fixture: ComponentFixture<DesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
