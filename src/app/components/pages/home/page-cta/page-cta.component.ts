import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cta',
  templateUrl: './page-cta.component.html',
  styleUrls: ['./page-cta.component.css']
})
export class PageCtaComponent {
  @Input() details: any;

  constructor() { }

}
