import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.css']
})
export class AboutTextComponent implements OnInit {
  @Input() aboutUs: any;
  constructor() { }

  ngOnInit(): void {
  }

}
