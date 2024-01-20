import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  banners: any = [];
  blocks: any = [];
  aboutUs: any;
  details: any;
  videos: any;
  videoHeader = '';
  videoTitle = '';
  leadershipHeader = '';
  leadershipTitle = '';
  leaders: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/homepage/').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          console.log(data);
          this.banners = data.result[0].banners;
          this.blocks = data.result[0].blocks;
          this.aboutUs = data.result[0].aboutUs;
          this.details = data.result[0].details;
          this.videos = data.result[0].media.videos;
          this.videoHeader = data.result[0].media.videos_header;
          this.videoTitle = data.result[0].media.videos_title;
          this.leaders = data.result[0].leadershipBoard.leaders;
          this.leadershipHeader = data.result[0].leadershipBoard.leaders;
          this.leadershipTitle = data.result[0].leadershipBoard.section_title;
          this.leadershipHeader = data.result[0].leadershipBoard.header;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
