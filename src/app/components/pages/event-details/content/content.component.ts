import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/components/data/service/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() event: any;
  @Input() isProgram = false;

  constructor(private commonService: CommonService) {}

  getTimeDetails(startTime: string, endTime: string): string {
    return this.commonService.getTimeDetails(startTime, endTime);
  }

  getDateInitials(event: any): any {
    if (this.isProgram) {
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
