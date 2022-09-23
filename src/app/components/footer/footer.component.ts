import { Component, Input, OnInit } from '@angular/core';

interface Link {
  url: string,
  title: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  @Input() links: Array<Link> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
