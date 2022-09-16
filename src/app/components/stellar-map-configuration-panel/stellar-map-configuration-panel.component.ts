import { Component, Input, OnInit } from '@angular/core';

interface ThemeStellarMap {
  url: string,
  title: string
}

@Component({
  selector: 'app-stellar-map-configuration-panel',
  templateUrl: './stellar-map-configuration-panel.component.html',
  styleUrls: ['./stellar-map-configuration-panel.component.scss']
})
export class StellarMapConfigurationPanelComponent implements OnInit {
  @Input() themes: Array<ThemeStellarMap> = [];
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
