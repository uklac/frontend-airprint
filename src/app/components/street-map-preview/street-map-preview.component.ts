import { Component, Input, OnInit } from '@angular/core';
import { ConfigStreetMap } from 'src/app/models/theme-street';

@Component({
  selector: 'app-street-map-preview',
  templateUrl: './street-map-preview.component.html',
  styleUrls: ['./street-map-preview.component.scss']
})
export class StreetMapPreviewComponent implements OnInit {
  @Input() city='';
  @Input() style='';
  @Input() headline = '';
	@Input() divider = '';
	@Input() tagline = '';
  @Input() configuration: ConfigStreetMap = {
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
  }

}
