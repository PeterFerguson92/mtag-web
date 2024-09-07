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
    const formatted = this.getDate(rawDate);
    const names = formatted.split(' ');

    const formattedEndDate = this.getDate(rawEndDate);
    const namesEndDate = formattedEndDate.split(' ');

    if (rawEndDate !== rawDate)
    {
      return `${names[0]} ${names[1]} ${names[2]} - ${namesEndDate[0]} ${namesEndDate[1]} ${namesEndDate[2]}`;
    } else
    {
      return `${names[0]} ${names[1]} ${names[2]}`;
    }
  }

  getDate(rawDate: string): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const t = new Date(rawDate);
    return t.getDate() + ' ' + monthNames[t.getMonth()] + ' ' + t.getFullYear();
  }
}
