import { Component, OnInit } from '@angular/core';
import { PropsStreetPoster } from 'src/app/models/props-street-poster';
import { ThemeStreetMap,ConfigStreetMap } from 'src/app/models/theme-street';
import { Frame } from 'src/app/models/frame';

@Component({
  selector: 'app-street-map-page',
  templateUrl: './street-map-page.component.html',
  styleUrls: ['./street-map-page.component.scss']
})
export class StreetMapPageComponent implements OnInit {

  constructor() { }

	defaultTheme = {
		styleUrl: 'mapbox://styles/molly98/cl8kn16ml001o15mim9pwerw2',
		poster: {
			background: '#f7f7f7',
			text: 'black',
		}
	}

  themes: Array<ThemeStreetMap> = [];
	frames: Array<Frame> = [];
	selectedTheme: any;

  poster = {
		headline: 'NEW YORK',
		divider: 'MAP OF MANHATTAN',
		tagline: 'UNITED STATES',
		textStyle: 'basic'
	}

	frameSelected: Frame | undefined;

  ngOnInit(): void {
		this.themes = [
				{
					url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
					title: "Nieve",
					configuration: {
						styleUrl: 'mapbox://styles/molly98/cl8kmtw6t000u15s4p140knkm',
						poster: {
							background: '#f7f7f7',
							text: 'black',
						}
					}
				},
				{
					url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
					title: "Naval",
					configuration: {
						styleUrl: 'mapbox://styles/molly98/cl8kn16ml001o15mim9pwerw2',
						poster: {
							background: '#f7f7f7',
							text: 'black',
						}
					}
				},
				{
					url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
					title: "Noche",
					configuration: {
						styleUrl: 'mapbox://styles/molly98/cl8knaa6w001014mpchwbs57l',
						poster: {
							background: 'black',
							text: '#f7f7f7',
						}
					}
				},
				{
					url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
					title: "Antaño",
					configuration: {
						styleUrl: 'mapbox://styles/molly98/cl8kn4un6000y14t9wo8peex8',
						poster: {
							background: '#eac99f',
							text: 'black',
						}
					}
				},
				{
					url: "https://mapiful-static.s3.eu-central-1.amazonaws.com/live/streetmap/assets/img/modern.jpg",
					title: "Otoño",
					configuration: {
						styleUrl: 'mapbox://styles/molly98/cl8knlyuf002t15pcy08xxaow',
						poster: {
							background: '#f7f7f7',
							text: 'black',
						}
					}
				}
		];

		this.frames = [
			{
				url:"https://www.mapiful.com/content/uploads/2019/10/Black-Wood-Frame-Front-view-in-size-24x36-inches-100x100.jpg",
				color:"#FCCC8E",
				title:"1"
			},
			{
				url:"https://www.mapiful.com/content/uploads/2019/10/Black-Wood-Frame-Front-view-in-size-24x36-inches-100x100.jpg",
				color:"#221E1F",
				title:"2"
			},
			{
				url:"https://www.mapiful.com/content/uploads/2019/10/Black-Wood-Frame-Front-view-in-size-24x36-inches-100x100.jpg",
				color:"white",
				title:"3"
			},
		];

		this.frameSelected = this.frames[0];
		this.selectedTheme = this.themes[1].configuration;
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

	updateFrame(frame: Frame) {
		this.frameSelected = frame;
	}
}
