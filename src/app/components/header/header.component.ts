import { Component, Input, OnInit } from '@angular/core';

interface Link {
  link: string,
  title: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() links: Array<Link> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
