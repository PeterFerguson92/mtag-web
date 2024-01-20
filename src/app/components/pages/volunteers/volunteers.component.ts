import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css'],
})
export class VolunteersComponent implements OnInit {
  leadership: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/homepage/leadershipBoard').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.leadership = data.result[0];
          console.log(this.leadership);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
