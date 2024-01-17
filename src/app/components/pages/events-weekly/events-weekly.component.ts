import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';
import { CommonService } from '../../data/service/common.service';

@Component({
  selector: 'app-events-weekly',
  templateUrl: './events-weekly.component.html',
  styleUrls: ['./events-weekly.component.css'],
})
export class EventsWeeklyComponent implements OnInit {
  events: any[] = [];
  sortedEvents: any[] = [];
  constructor(
    private apiService: ApiService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.apiService.getWeeklyEvents().subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.events = data.result[0].events;
          // this.processEvents(data.result[0].events);
          // console.log(this.events);
          this.sortedEvents = this.events.sort(function (a, b) {
            return a.day > b.day ? 1 : b.day > a.day ? -1 : 0;
          });
          console.log(this.events);
          console.log(this.sortedEvents);
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

  processEvents(rawEvents: any[]): void {
    // tslint:disable-next-line:forin
    for (const ev of rawEvents) {
      this.events.push({
        id: ev.id,
        title: ev.title,
        image: ev.cover_image_path,
        shorttext: ev.description,
        location: ev.location,
        eventdate: '31 August 2022',
      });
    }
  }
}
