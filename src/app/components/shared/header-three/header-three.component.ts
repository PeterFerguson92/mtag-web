import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.css'],
})
export class HeaderThreeComponent extends HelperService implements OnInit {
  content1 = '';
  content2 = '';

  constructor(
    private apiService: ApiService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.apiService.getResource('/homepage/details').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.content1 = data.result[0].info_content_1;
          this.content2 = data.result[0].info_content_2;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
