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
  text = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.text = `Stay informed about our upcoming events and programs. We have so many more coming up do well to participate and you will surely be impacted and blessed!`;

    this.apiService.getResource('/activities/weekly').subscribe(
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
