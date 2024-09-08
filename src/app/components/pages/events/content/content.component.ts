import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/data/service/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() events: any = [];
  page = 1;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  getTimeDetails(startTime: string, endTime: string): string {
    return this.commonService.getTimeDetails(startTime, endTime);
  }

  getDateInitials(rawDate: string, rawEndDate: string): string {
    return this.commonService.getDisplayDate(rawDate, rawEndDate);
  }

}
