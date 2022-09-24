import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricPostersPagesComponent } from './geometric-posters-pages.component';

describe('GeometricPostersPagesComponent', () => {
  let component: GeometricPostersPagesComponent;
  let fixture: ComponentFixture<GeometricPostersPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeometricPostersPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeometricPostersPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
