import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-street-map-preview',
  templateUrl: './street-map-preview.component.html',
  styleUrls: ['./street-map-preview.component.scss']
})
export class StreetMapPreviewComponent implements OnInit, OnChanges, AfterViewInit {
	@Input() headline = '';
	@Input() divider = '';
	@Input() tagline = '';
  @Input() textStyle = 'basic';
  @Input() latitude: number | undefined ;
  @Input() longitude: number | undefined ;
	@Input() mapboxToken: string | undefined ;
  @Input() urlFrame: string | undefined;
  @Input() styleMapUrl: string | undefined;
  @Input() posterBackground: string | undefined;
  @Input() posterColorText: string | undefined;

	private map: any;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
		if (changes['styleMapUrl'] && !changes['styleMapUrl'].firstChange) {
			const { styleMapUrl: { currentValue } } = changes;
			this.map.setStyle(currentValue);
		}
  }

	ngAfterViewInit() {
		const coordinates = {
			latitude: this.latitude || -3.99313,
			longitude: this.longitude || -79.20422
		};
		this.map = new mapboxgl.Map({
			accessToken: this.mapboxToken,
			container: 'map',
			style: this.styleMapUrl,
			zoom: 13,
			center: [coordinates.longitude, coordinates.latitude]
		});
	}
}
