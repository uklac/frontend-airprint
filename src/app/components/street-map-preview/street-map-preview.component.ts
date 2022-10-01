import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { ConfigStreetMap } from 'src/app/models/theme-street';

@Component({
  selector: 'app-street-map-preview',
  templateUrl: './street-map-preview.component.html',
  styleUrls: ['./street-map-preview.component.scss']
})
export class StreetMapPreviewComponent implements OnInit, OnChanges {
  @Input() city='';
  @Input() textStyle='';
  @Input() headline = '';
	@Input() divider = '';
	@Input() tagline = '';
  @Input() configuration: ConfigStreetMap = {

    poster: {
			background: '#f6f6f6',
			text: '#1d1e2c'
		}
	};

  styleColors = {};

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['configuration'] && !changes['configuration'].firstChange) {
			const { configuration: { currentValue } } = changes;
      this.styleColors = {
        background: currentValue.poster.background,
        color: currentValue.poster.text,
      }
		}
  }
}
