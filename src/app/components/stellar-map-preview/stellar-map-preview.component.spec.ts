import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarMapPreviewComponent } from './stellar-map-preview.component';

describe('StellarMapPreviewComponent', () => {
  let component: StellarMapPreviewComponent;
  let fixture: ComponentFixture<StellarMapPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellarMapPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellarMapPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
