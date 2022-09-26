import { Component, OnInit } from '@angular/core';
import { PropsStreetPoster } from 'src/app/models/props-street-poster';
import { ThemeStreetMap,ConfigStreetMap } from 'src/app/models/theme-street';

@Component({
  selector: 'app-street-map-page',
  templateUrl: './street-map-page.component.html',
  styleUrls: ['./street-map-page.component.scss']
})
export class StreetMapPageComponent implements OnInit {

  constructor() { }
  
  defaultTheme = {
		poster: {
			background: '#f6f6f6',
			text: '#1d1e2c'
		}
	};

  themes: Array<ThemeStreetMap> = [];
	selectedTheme: ConfigStreetMap = this.defaultTheme;

  poster = {
		headline: 'TOKIO',
		divider: 'JAPAN',
		tagline: 'SEPTEMBER 10TH 2019',
    style: 'lineal'
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

  updateTextPoster(props: PropsStreetPoster) {
		this.poster = props;
	}

  updatePoster(theme: ThemeStreetMap) {
		const copyTheme = JSON.parse(JSON.stringify(this.selectedTheme));
		const newTheme = Object.assign(copyTheme, theme.configuration);
		this.selectedTheme = newTheme || this.defaultTheme;
	}

}
