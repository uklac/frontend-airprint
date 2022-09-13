import { Component, Input, OnInit } from '@angular/core';

interface Map {
  link: string,
  title: string
}

@Component({
  selector: 'app-stellar-map-configuration-panel',
  templateUrl: './stellar-map-configuration-panel.component.html',
  styleUrls: ['./stellar-map-configuration-panel.component.scss']
})
export class StellarMapConfigurationPanelComponent implements OnInit {
  @Input() links: Array<Map> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
