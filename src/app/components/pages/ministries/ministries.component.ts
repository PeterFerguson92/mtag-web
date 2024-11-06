import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css'],
})
export class MinistriesComponent implements OnInit {
  ministries = [];
  text = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.text = `With a wide range of ministries and departments we define
    ourselves as a dynamic Church, we always have something interesting going on for everyone.All events and programs are carefully selected and planned to ensure an impact is made every single time'`;
    this.apiService.getResource('/ministries/').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.ministries = data.result;
        } else {
          this.ministries = [];
        }
      },
      (error: any) => {
        this.ministries = [];
        console.log(error);
      }
    );
  }
}
