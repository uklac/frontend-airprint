import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricPosterPreviewComponent } from './geometric-poster-preview.component';

describe('GeometricPosterPreviewComponent', () => {
  let component: GeometricPosterPreviewComponent;
  let fixture: ComponentFixture<GeometricPosterPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeometricPosterPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeometricPosterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
