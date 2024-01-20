import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css'],
})
export class VolunteerDetailsComponent implements OnInit {
  leader: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    const id = snapshot.paramMap.get('id');

    if (id) {
      const url = '/homepage/leader/detail/' + id;
      this.apiService.getResource(url).subscribe(
        (data) => {
          if (data.status === 'success')
          {
            console.log(url);
            this.leader = data.result;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
