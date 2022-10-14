import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturePosterPreviewComponent } from './signature-poster-preview.component';

describe('SignaturePosterPreviewComponent', () => {
  let component: SignaturePosterPreviewComponent;
  let fixture: ComponentFixture<SignaturePosterPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignaturePosterPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaturePosterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
