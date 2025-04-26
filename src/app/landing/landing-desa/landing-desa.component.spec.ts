import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDesaComponent } from './landing-desa.component';

describe('LandingDesaComponent', () => {
  let component: LandingDesaComponent;
  let fixture: ComponentFixture<LandingDesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingDesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingDesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
