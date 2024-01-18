import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-events-weekly',
  templateUrl: './events-weekly.component.html',
  styleUrls: ['./events-weekly.component.css'],
})
export class EventsWeeklyComponent implements OnInit {
  events: any[] = [];
  sortedEvents: any[] = [];
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getWeeklyEvents().subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.events = data.result[0].events;
          this.sortedEvents = this.events.sort(function (a, b) {
            return a.day > b.day ? 1 : b.day > a.day ? -1 : 0;
          });
        } else {
          this.events = [];
        }
      },
      (error: any) => {
        this.events = [];
        console.log(error);
      }
    );
  }
}
