import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarMapConfigurationPanelComponent } from './stellar-map-configuration-panel.component';

describe('StellarMapConfigurationPanelComponent', () => {
  let component: StellarMapConfigurationPanelComponent;
  let fixture: ComponentFixture<StellarMapConfigurationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellarMapConfigurationPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellarMapConfigurationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
