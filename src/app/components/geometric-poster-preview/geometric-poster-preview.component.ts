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
  pieces: Array<string> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.styleColors = {
      background: this.style?.background,
      color: this.style?.text,
    }
  }

  generate() {
    const route = "../../../assets/images/poster/kander/piece-";
    const result = Array.from({length: 25}, () => route + this.randomNumber() + ".svg");
    this.pieces = result;
  }

  generate2() {
    const route = "../../../assets/images/poster/thur/piece-";
    const result = Array.from({length: 25}, () => route + this.randomNumber() + ".svg");
    this.pieces = result;
  }

  randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

}
