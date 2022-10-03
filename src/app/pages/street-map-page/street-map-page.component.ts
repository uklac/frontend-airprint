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
		tagline: 'SEPTEMBER 10TH 2020',
		textStyle: 'basic'
	}

  ngOnInit(): void {
	this.themes = [
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title: "Modern",
				configuration: {
					poster: {
						background: 'blue',
						text: 'white',
					}
				}
			},
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title: "Japan",
				configuration: {
					poster: {
						background: 'black',
						text: 'white'
					}
				}
			},
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title: "Forest",
				configuration: {
					poster: {
						background: '#dad7cd',
						text: '#182731'
					}
				}
			},
			{
				url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
				title: "Spacial",
				configuration: {
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

	updateText(style: string) {
		this.poster.textStyle = style;
	}

}
