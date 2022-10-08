import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-signature-poster-preview',
  templateUrl: './signature-poster-preview.component.html',
  styleUrls: ['./signature-poster-preview.component.scss']
})
export class SignaturePosterPreviewComponent implements OnInit, OnChanges {
	@Input() background: string | undefined;
	@Input() fontColor: string | undefined;
	@Input() headline: string | undefined
	@Input() tagline: string | undefined;
	@Input() sublime: string | undefined;
	@Input() fullSize: boolean = false;

	style: any;

  constructor() { }

  ngOnInit(): void {
		this.style = {
			background: this.background || '#2a4b62',
			color: this.fontColor || '#f7f7f7'
		}
  }

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['background'] && !changes['background'].firstChange) {
			const { background: { currentValue } } = changes;
			this.style = {
				background: currentValue,
			}
		}
		if (changes['fontColor'] && !changes['fontColor'].firstChange) {
			const { fontColor: { currentValue } } = changes;
			this.style = {
				background: this.style.background,
				color: currentValue
			}
		}
	}
}
