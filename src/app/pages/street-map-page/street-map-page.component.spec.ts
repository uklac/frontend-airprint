import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetMapPageComponent } from './street-map-page.component';

describe('StreetMapPageComponent', () => {
  let component: StreetMapPageComponent;
  let fixture: ComponentFixture<StreetMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetMapPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
