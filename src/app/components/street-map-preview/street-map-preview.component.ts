import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { ConfigStreetMap } from 'src/app/models/theme-street';
import { Frame } from 'src/app/models/frame';

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
  @Input() colorFrame: Frame | undefined;
  @Input() configuration: ConfigStreetMap = {
    poster: {
			background: '#f6f6f6',
			text: '#1d1e2c'
		}
	};

  styleColors = {};
  styleFrame = {};

  constructor() { }

  ngOnInit(): void {
    this.styleFrame = {
      background: this.colorFrame?.color || "#c7c7c7",
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['configuration'] && !changes['configuration'].firstChange) {
			const { configuration: { currentValue } } = changes;
      this.styleColors = {
        background: currentValue.poster.background,
        color: currentValue.poster.text,
      }
		}

    if(changes['colorFrame'] && !changes['colorFrame'].firstChange){
      const {colorFrame: { currentValue } } = changes;
      this.styleFrame = {
        background: currentValue.color
      }
    }
  }

}
