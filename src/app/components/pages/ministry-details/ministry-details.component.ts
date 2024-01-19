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

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    const id = snapshot.paramMap.get('id');

    if (id) {
      this.apiService.getMinistryDetail(id).subscribe(
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
