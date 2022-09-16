import { Component, Input, OnInit } from '@angular/core';

interface ThemeStreetMap {
  url: string,
  title: string
}

interface FrameStreetMap {
  url: string,
  titleFrame: string
}

@Component({
  selector: 'app-street-map-configuration-panel',
  templateUrl: './street-map-configuration-panel.component.html',
  styleUrls: ['./street-map-configuration-panel.component.scss']
})
export class StreetMapConfigurationPanelComponent implements OnInit {
  @Input() themes: Array<ThemeStreetMap> = [];
  @Input() textStyle: Array<String> = [];
  @Input() frames: Array<FrameStreetMap> = [];

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
