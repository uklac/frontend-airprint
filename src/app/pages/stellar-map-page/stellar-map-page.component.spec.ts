import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarMapPageComponent } from './stellar-map-page.component';

describe('StellarMapPageComponent', () => {
  let component: StellarMapPageComponent;
  let fixture: ComponentFixture<StellarMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellarMapPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellarMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
