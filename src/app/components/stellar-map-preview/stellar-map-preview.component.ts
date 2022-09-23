import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigStellarMap } from 'src/app/models/theme-stellar';
declare var Celestial: any;

@Component({
	selector: 'app-stellar-map-preview',
	templateUrl: './stellar-map-preview.component.html',
	styleUrls: ['./stellar-map-preview.component.scss']
})
export class StellarMapPreviewComponent implements OnInit, OnChanges {
	@Input() headline = '';
	@Input() divider = '';
	@Input() tagline = '';
	@Input() sublime = '';
	@Input() constellations = false;
	@Input() grid = false;
	@Input() constellationsNames = false;
	@Input() configuration: ConfigStellarMap = {
		lines: {
			graticule: false
		},
		constellations: {
			name: false,
			lines: false
		},
		background: {
			fill: '#D2001A'
		},
		poster: {
			background: '#f6f6f6',
			text: '#1d1e2c'
		}
	};

	styleColors = {};

	constructor() { }

	ngOnInit(): void {
		this.mapInit(this.configuration);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['configuration'] && !changes['configuration'].firstChange) {
			const { configuration: { currentValue } } = changes;
			const config = this.getParamsConfiguration(currentValue);
			Celestial.apply(config);
		}
	}

	mapInit(params: ConfigStellarMap) {
		const DATE = new Date("2021-09-25T04:00:00+0000");
		const config = this.getParamsConfiguration(params);
		Celestial.display(config);
		Celestial.skyview({ date: DATE });
	}

	getParamsConfiguration(params?: any) {
		const { constellations, lines, background, poster } = params;
		this.styleColors = {
			background: poster.background,
			color: poster.text,
		};
		const FONT = "Raleway";
		const [LAT, LON] = [36.525321, -121.815916];
		return {
			container: "map",
			width: 0,
			datapath: "../../../assets/data/", // Path/URL to data files, empty = subfolder 'data'

			form: false,
			advanced: false,
			interactive: false,
			disableAnimations: true,

			zoomlevel: null,
			zoomextend: 1,

			projection: "airy",
			transform: "equatorial",

			follow: "zenith",
			geopos: [LAT, LON],

			lines: {
				graticule: { show: lines?.graticule || false },
				equatorial: { show: false },
				ecliptic: { show: false },
				galactic: { show: false },
				supergalactic: { show: false }
			},

			planets: {
				show: false,
				which: ["mer", "ven", "ter", "lun", "mar", "jup", "sat"],

				symbolType: "disk",
				names: true,
				nameStyle: {
					fill: "#00ccff",
					font: `14px ${FONT}`,
					align: "center",
					baseline: "top"
				},
				namesType: "en"
			},

			dsos: {
				show: false,
				names: false
			},

			constellations: {
				names: constellations?.names || false, //active false
				namesType: "iau",
				nameStyle: {
					fill: "#ffffff",
					align: "center",
					baseline: "middle",
					font: [`14px ${FONT}`, `8px ${FONT}`, `0px ${FONT}`]
				},
				lines: constellations?.lines || false,
				lineStyle: { stroke: "#cccccc", width: 1.5, opacity: 1 }
			},

			mw: {
				show: false,
				style: { fill: "#ffffff", opacity: 0.02 }
			},

			background: {
				fill: background?.fill || "#D2001A", // globe color
				stroke: "#EFEFEF",
				opacity: 1,
				width: 2
			},

			stars: {
				colors: true,
				size: 12,
				limit: 6,
				exponent: -0.26,
				designation: false,

				propername: false,
				propernameType: "name",
				propernameStyle: {
					fill: "#ddddbb",
					font: `8px ${FONT}`,
					align: "right",
					baseline: "center"
				},
				propernameLimit: 2.0
			}
		};
	}
}
