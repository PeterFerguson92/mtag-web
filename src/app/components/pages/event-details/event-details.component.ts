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
    const id = snapshot.paramMap.get('id');
    if (id) {
      const url = this.getEventsFromType(snapshot.data.breadcrumb, id);
      this.apiService.getResource(url).subscribe(
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

  getEventsFromType(type: string, id: any): string {
    switch (type) {
      case 'Event Details': {
        return '/activities/event/' + id;
      }
      case 'Program Details': {
        return '/activities/event/' + id;
      }
      case 'Social Details': {
        return '/activities/socialevent/' + id;
      }
      default: {
        return '/activities/event/' + id;
      }
    }
  }
}
