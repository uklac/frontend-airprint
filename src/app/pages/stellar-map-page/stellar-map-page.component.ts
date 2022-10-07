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
	selectedFrame: any;

	poster = {
    headline: 'TOKIO',
    divider: 'JAPAN',
    tagline: 'SEPTEMBER 10TH 2019',
    sublime: '48.856 N / 2.3522`E',
  }

	frames = [
		{
			url:"https://fotoneac.com/wp-content/uploads/2021/03/NW-e1618505478124.jpg",
			color:"#FCCC8E",
			title:"Natural"
		},
		{
			url:"https://st2.depositphotos.com/1040018/6351/i/600/depositphotos_63513719-stock-photo-black-wood-wall-background.jpg",
			color:"#221E1F",
			title:"Black"
		},
		{
			url:"https://st.depositphotos.com/1761693/1946/i/600/depositphotos_19460577-stock-photo-wooden-texture-white-wooden-background.jpg",
			color:"white",
			title:"White"
		},
	];

  ngOnInit(): void {
		this.themes = [
			{
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/modern.jpg",
				title:"Modern",
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
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/asphalt.jpg",
				title:"Japan",
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
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title:"Forest",
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
				url:"https://mapiful-static.s3.eu-central-1.amazonaws.com/live/starmaps/assets/img/nisshoki.jpg",
				title:"Spacial",
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

		this.selectedFrame = this.frames[0];
  }

	updateTextPoster(props: PropsStellarPoster) {
		this.poster = props;
	}

	updatePoster(theme: ThemeStellarMap) {
		const copyTheme = JSON.parse(JSON.stringify(this.selectedTheme));
		const newTheme = Object.assign(copyTheme, theme.configuration);
		this.selectedTheme = newTheme || this.defaultTheme;
	}

	updateFrame(frame: any) {
		this.selectedFrame = frame;
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
