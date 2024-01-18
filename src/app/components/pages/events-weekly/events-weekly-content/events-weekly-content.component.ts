import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/data/service/common.service';

@Component({
  selector: 'app-events-weekly-content',
  templateUrl: './events-weekly-content.component.html',
  styleUrls: ['./events-weekly-content.component.css'],
})
export class EventsWeeklyContentComponent implements OnInit {
  @Input() events: any;
  sortedEvents: any;
  page = 1;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  getTimeDetails(startTime: string, endTime: string): string {
    return this.commonService.getTimeDetails(startTime, endTime);
  }

  getDateInitials(day: string): any {
    return this.commonService.getDateInitials(day);
  }
}
