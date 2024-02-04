import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  isProgram: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    // tslint:disable-next-line:triple-equals
    this.isProgram = snapshot.data.breadcrumb == 'Program Details';
    const id = snapshot.paramMap.get('id');
    if (id) {
      if (this.isProgram) {
        this.apiService.getResource('/activities/program/' + id).subscribe(
          (data) => {
            if (data.status === 'success') {
              this.event = data.result;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.apiService.getResource('/activities/event/' + id).subscribe(
          (data) => {
            if (data.status === 'success') {
              this.event = data.result;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}
