import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import event from '../../../data/event/event.json';

@Component({
  selector: 'app-events-weekly-content',
  templateUrl: './events-weekly-content.component.html',
  styleUrls: ['./events-weekly-content.component.css'],
})
export class EventsWeeklyContentComponent implements OnInit {
  @Input() events: any;
  sortedEvents: any;
  page = 1;
  public eventblock: any;

  constructor() { }

  ngOnInit(): void {
  }

  getTimeDetails(startTime: string, endTime: string): string {
    return `${startTime.substring(0, 5)} - ${endTime.substring(0, 5)}`;
  }

  getDateInitials(day: string): any {
    return `${day.substring(3, day.length)}`;
  }
}
