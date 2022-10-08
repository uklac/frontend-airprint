import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature-poster-preview',
  templateUrl: './signature-poster-preview.component.html',
  styleUrls: ['./signature-poster-preview.component.scss']
})
export class SignaturePosterPreviewComponent implements OnInit {
	@Input() background: string | undefined;
	@Input() headline = "";
	@Input() tagline: string | undefined;
	@Input() sublime: string | undefined;

	style = {};

  constructor() { }

  ngOnInit(): void {
		this.style = {
			background: this.background || '#2a4b62'
		}
  }

}
