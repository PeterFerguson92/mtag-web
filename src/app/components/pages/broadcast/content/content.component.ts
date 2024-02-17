import { Component, Input, OnInit } from '@angular/core';
import data from "../../../data/broadcast.json";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public broadcast = data;
  @Input() broadcastInfo: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.broadcastInfo);
  }

  getVideoImage(img: string): string {
    if (img) {
      return img;
    } else {
      return 'assets/img/video-gallery/video-default.png';
    }
  }

}
