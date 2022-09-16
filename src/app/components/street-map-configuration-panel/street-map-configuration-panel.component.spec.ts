import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetMapConfigurationPanelComponent } from './street-map-configuration-panel.component';

describe('StreetMapConfigurationPanelComponent', () => {
  let component: StreetMapConfigurationPanelComponent;
  let fixture: ComponentFixture<StreetMapConfigurationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetMapConfigurationPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetMapConfigurationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
