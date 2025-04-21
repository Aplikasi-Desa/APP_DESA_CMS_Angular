import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnggaranComponent } from './anggaran.component';

describe('AnggaranComponent', () => {
  let component: AnggaranComponent;
  let fixture: ComponentFixture<AnggaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnggaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnggaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
