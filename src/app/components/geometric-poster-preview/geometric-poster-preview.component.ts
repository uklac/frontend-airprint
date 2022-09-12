import { Component, Input, OnInit } from '@angular/core';
interface PosterColor {
  background: string;
  text: string;
}

@Component({
  selector: 'app-geometric-poster-preview',
  templateUrl: './geometric-poster-preview.component.html',
  styleUrls: ['./geometric-poster-preview.component.scss']
})
export class GeometricPosterPreviewComponent implements OnInit {
  @Input() headline = '';
  @Input() phrase = '';
  @Input() style: PosterColor | undefined;
  styleColors = {};
  constructor() { }

  ngOnInit(): void {
    this.styleColors = {
      background: this.style?.background,
      color: this.style?.text,
    }
  }

}
