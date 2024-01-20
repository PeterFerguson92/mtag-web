import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  info: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/homepage/aboutus/detail').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.info = data.result[0];
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
