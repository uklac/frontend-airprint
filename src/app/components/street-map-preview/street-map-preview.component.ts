import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import { ConfigStreetMap } from 'src/app/models/theme-street';
import { Frame } from 'src/app/models/frame';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-street-map-preview',
  templateUrl: './street-map-preview.component.html',
  styleUrls: ['./street-map-preview.component.scss']
})
export class StreetMapPreviewComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() city='';
  @Input() textStyle ='basic';
  @Input() headline = '';
	@Input() divider = '';
	@Input() tagline = '';
  @Input() colorFrame: Frame | undefined;
  @Input() configuration: any;

  styleColors = {};
  styleFrame = {};

	map: any;
  lat = -3.99313;
  lng = -79.20422;

  constructor() {}

  ngOnInit(): void {
    this.styleFrame = {
      background: this.colorFrame?.color || "#c7c7c7",
    }
		this.styleColors = {
			background: this.configuration.poster.background,
			color: this.configuration.poster.text,
		}
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['configuration'] && !changes['configuration'].firstChange) {
			const { configuration: { currentValue } } = changes;
      this.styleColors = {
        background: currentValue.poster.background,
        color: currentValue.poster.text,
      }
			this.map.setStyle(currentValue.styleUrl);
		}

    if(changes['colorFrame'] && !changes['colorFrame'].firstChange){
      const {colorFrame: { currentValue } } = changes;
      this.styleFrame = {
        background: currentValue.color
      }
    }

  }

	ngAfterViewInit() {
		// debugger
		this.map = new mapboxgl.Map({
			accessToken: environment.mapboxAuth,
			container: 'map',
			style: this.configuration.styleUrl,
			zoom: 13,
			center: [this.lng, this.lat]
		});
	}

}
