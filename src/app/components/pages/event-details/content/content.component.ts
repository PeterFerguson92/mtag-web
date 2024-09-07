import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/components/data/service/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() event: any;
  @Input() eventType: any;
  @Input() isGalleryVisibile: any;

  constructor(private commonService: CommonService) {}

  getTimeDetails(startTime: string, endTime: string): string {
    return this.commonService.getTimeDetails(startTime, endTime);
  }

  getDateInitials(event: any): any {
    if (this.eventType === 'program') {
      return this.getProgramDateInitials(event.start_date, event.end_date);
    } else {
      return this.commonService.getDateInitials(event.day);
    }
  }

  getProgramDateInitials(rawDate: string, rawEndDate: string): string {
    const formatted = this.getDate(rawDate);
    const formattedEndDate = this.getDate(rawEndDate);

    if (rawEndDate !== rawDate) {
      return `${formatted} - ${formattedEndDate}`;
    } else {
      return `${formatted}`;
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
