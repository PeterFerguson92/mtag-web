import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import data from '../../../data/broadcast.json';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css'],
})
export class BroadcastComponent implements OnInit, OnChanges {
  public broadcast = data;
  @Input() videos: any;
  @Input() header: any;
  @Input() title: any;
  featuredVideo: any;
  ntVideos = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.videos) {
      this.featuredVideo = this.videos.filter((x: any) => x.featured)[0];
      this.ntVideos = this.videos.filter((x: any) => !x.featured);
    }
  }

  getVideoImage(img: string): string {
    if (img) {
      return img;
    } else {
      return 'assets/img/video-gallery/01.png';
    }
  }
}
