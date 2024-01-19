import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  banners: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/homepage/').subscribe(
      (data: any) => {
        console.log(data);
        if (data.status === 'success') {
          this.banners = data.result[0].banners;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
