import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetMapPreviewComponent } from './street-map-preview.component';

describe('StreetMapPreviewComponent', () => {
  let component: StreetMapPreviewComponent;
  let fixture: ComponentFixture<StreetMapPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetMapPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetMapPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
