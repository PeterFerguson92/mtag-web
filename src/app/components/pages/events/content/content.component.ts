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

  getDateInitials(rawDate: string): string {
    const formatted = this.getDate(rawDate);
    const names = formatted.split(' ');
    let initials = '<span>' + names[0].substring(0, 2) + '</span>';

    if (names.length > 2) {
      initials += names[names.length - 2].substring(0, 3).toUpperCase() + names[names.length - 1];
    }
    console.log(initials);
    return initials;
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
