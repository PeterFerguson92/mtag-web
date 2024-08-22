import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import data from '../../../data/broadcast.json';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css'],
})
export class BroadcastComponent implements OnInit, OnChanges {
  public broadcast = data;
  @Input() videoId: any;
  @Input() header: any;
  @Input() title: any;
  videoUrl: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.videoId.currentValue) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://drive.google.com/file/d/${this.videoId}/preview`
      );
    }
  }

  getVideoImage(img: string): string {
    if (img) {
      return img;
    } else {
      return 'assets/img/video-gallery/video-default.png';
    }
  }
}
