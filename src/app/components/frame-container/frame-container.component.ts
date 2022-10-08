import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
export interface Frame {
  url: string;
}

@Component({
  selector: 'app-frame-container',
  templateUrl: './frame-container.component.html',
  styleUrls: ['./frame-container.component.scss']
})
export class FrameContainerComponent implements OnInit {
	@Input() params: Frame | undefined;
	styleFrame = {};

  constructor() { }

  ngOnInit(): void {
		if (this.params) {
			const { url } = this.params;
			this.styleFrame = {
				'background': `url(http://tumodaurbana.com/wp-content/uploads/2013/05/tumodaurbana-expo-dali.jpg)`,
				'border-image': `url(${url}) 200 stretch`
			}
		}
  }

	ngOnChanges(changes: SimpleChanges): void {
		if(changes['colorFrame'] && !changes['colorFrame'].firstChange){
      const {colorFrame: { currentValue } } = changes;
			this.styleFrame = {
				'background': `url(http://tumodaurbana.com/wp-content/uploads/2013/05/tumodaurbana-expo-dali.jpg)`,
				'border-image': `url(${currentValue.url}) 200 stretch`
			}
    }
	}

}
