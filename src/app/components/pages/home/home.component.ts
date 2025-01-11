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
  videoHeader = '';
  videoTitle = '';
  videoId = '';
  leadershipHeader = '';
  leadershipTitle = '';
  leaders: any;
  bannerBackgroundImage = '';
  bannerPresentationImage = '';
  leadershipBoardBackgroundImage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/homepage/').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          const result = data.result[0];
          if (result)
          {
            this.banners = result.banners;
            this.blocks = result.blocks;
            this.aboutUs = result.aboutUs;
            this.details = result.details;
            this.videoHeader = result.media
              ? result.media.videos_header
              : null;
            this.videoTitle = result.media
              ? result.media.videos_title
              : null;
            this.videoId = result.media ? result.media.videos[0].url : null;
            this.leaders = result.leadershipBoard
              ? result.leadershipBoard.leaders
              : null;
            this.leadershipTitle = result.leadershipBoard
              ? result.leadershipBoard.section_title
              : null;
            this.leadershipHeader = result.leadershipBoard
              ? result.leadershipBoard.header
              : null;
            this.bannerBackgroundImage = result.banner_background_image;
            this.bannerPresentationImage = result.banner_presentation_image;
            this.leadershipBoardBackgroundImage =
              result.leadership_board_background_image;
          }
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
