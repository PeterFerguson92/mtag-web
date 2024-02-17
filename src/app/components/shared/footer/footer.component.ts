import { Component, OnInit } from '@angular/core';
import data from '../../data/footerlinks.json';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public links = data;
  description = '';
  content1 = '';
  content2 = '';
  address = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/homepage/details').subscribe(
      (result: any) => {
        if (result.status === 'success')
        {
          this.description = result.result[0].description;
          this.content1 = result.result[0].info_content_1;
          this.content2 = result.result[0].info_content_2;
          this.address = result.result[0].address;

        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
