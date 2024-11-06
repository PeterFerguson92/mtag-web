import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-ministry-details',
  templateUrl: './ministry-details.component.html',
  styleUrls: ['./ministry-details.component.css'],
})
export class MinistryDetailsComponent implements OnInit {
  ministry: any;
  text = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.text = `With a wide range of ministries and departments we define
    ourselves as a dynamic Church, we always have something interesting going on for everyone.All events and programs are carefully selected and planned to ensure an impact is made every single time'`;

    const snapshot = this.activatedRoute.snapshot;
    const id = snapshot.paramMap.get('id');

    if (id) {
      this.apiService.getResource('/ministries/detail/' + id).subscribe(
        (data) => {
          if (data.status === 'success') {
            this.ministry = data.result;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
