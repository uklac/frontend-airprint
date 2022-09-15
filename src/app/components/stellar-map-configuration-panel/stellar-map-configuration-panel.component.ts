import { Component, Input, OnInit } from '@angular/core';

interface StyleMap {
  url: string,
  title: string
}

@Component({
  selector: 'app-stellar-map-configuration-panel',
  templateUrl: './stellar-map-configuration-panel.component.html',
  styleUrls: ['./stellar-map-configuration-panel.component.scss']
})
export class StellarMapConfigurationPanelComponent implements OnInit {
  @Input() maps: Array<StyleMap> = [];
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
