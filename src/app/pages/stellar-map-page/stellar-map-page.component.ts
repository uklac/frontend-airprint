import { Component, OnInit } from '@angular/core';
import { PropsStellarPoster } from 'src/app/models/props-stellar-poster';
import { ConfigStellarMap, ThemeStellarMap } from 'src/app/models/theme-stellar';

@Component({
	selector: 'app-stellar-map-page',
	templateUrl: './stellar-map-page.component.html',
	styleUrls: ['./stellar-map-page.component.scss']
})
export class StellarMapPageComponent implements OnInit {

	constructor() { }

	defaultTheme = {
		poster: {
			background: '#f6f6f6',
			text: '#1d1e2c'
		}
	};

	themes: Array<ThemeStellarMap> = [];
	selectedTheme: ConfigStellarMap = this.defaultTheme;
	poster = {
		headline: 'TOKIO',
		divider: 'JAPAN',
		tagline: 'SEPTEMBER 10TH 2019',
		sublime: '48.856 N / 2.3522`E',
	}

	ngOnInit(): void {
		this.themes = [
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/modern.jpg",
				title: "Modern",
				configuration: {
					background: {
						fill: '#b9dccd'
					},
					poster: {
						background: '#EFEFEF',
						text: '#182731'
					}
				}
			},
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/asphalt.jpg",
				title: "Japan",
				configuration: {
					background: {
						fill: '#e63946'
					},
					poster: {
						background: '#EFEFEF',
						text: '#182731'
					}
				}
			},
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title: "Forest",
				configuration: {
					background: {
						fill: '#3a5a40'
					},
					poster: {
						background: '#dad7cd',
						text: '#182731'
					}
				}
			},
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title: "Spacial",
				configuration: {
					background: {
						fill: '#8ecae6'
					},
					poster: {
						background: '#EFEFEF',
						text: '#182731'
					}
				}
			}
		];
	}

	updateTextPoster(props: PropsStellarPoster) {
		this.poster = props;
	}

	updatePoster(theme: ThemeStellarMap) {
		const copyTheme = JSON.parse(JSON.stringify(this.selectedTheme));
		const newTheme = Object.assign(copyTheme, theme.configuration);
		this.selectedTheme = newTheme || this.defaultTheme;
	}

	showConstellations(show: boolean) {
		const copyTheme = JSON.parse(JSON.stringify(this.selectedTheme));
		this.selectedTheme = Object.assign(copyTheme, {
			constellations: {
				lines: show
			},
		});
	}

	showGrid(show: boolean) {
		const copyTheme = JSON.parse(JSON.stringify(this.selectedTheme));
		this.selectedTheme = Object.assign(copyTheme, {
			lines: {
				graticule: show
			},
		});
	}

	showConstellationsNames(show: boolean) {
		let copyTheme = JSON.parse(JSON.stringify(this.selectedTheme));
		copyTheme.constellations = Object.assign(copyTheme.constellations, { names: show });
		this.selectedTheme = copyTheme;
	}
}
