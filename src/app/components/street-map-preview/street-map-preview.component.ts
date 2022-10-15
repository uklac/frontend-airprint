import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MapConfiguration {
	styleUrl: string;
	poster: {
		background: string;
		text: string;
	};
}
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
  @Input() configuration: MapConfiguration | undefined;

	private map: any;
  styleColors = {};

  constructor() {}

  ngOnInit(): void {
		this.styleColors = {
			background: this.configuration?.poster.background,
			color: this.configuration?.poster.text,
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
  }

	ngAfterViewInit() {
		const coordinates = {
			latitude: this.latitude || -3.99313,
			longitude: this.longitude || -79.20422
		};
		this.map = new mapboxgl.Map({
			accessToken: this.mapboxToken,
			container: 'map',
			style: this.configuration?.styleUrl,
			zoom: 13,
			center: [coordinates.longitude, coordinates.latitude]
		});
	}
}
