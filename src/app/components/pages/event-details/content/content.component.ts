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
    if (this.eventType === 'programs' || this.eventType === 'social-events') {
      if (event.start_date === event.end_date) {
        return this.commonService.getFormattedDate(event.start_date);
      } else {
        return this.commonService.getFormattedDate(event.start_date);
      }
    } else {
      return this.commonService.getDateInitials(event.day);
    }
  }
}
