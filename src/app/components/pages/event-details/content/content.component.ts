import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/components/data/service/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent  {
  @Input() event: any;

  constructor(private commonService: CommonService) { }

  getTimeDetails(startTime: string, endTime: string): string {
    return this.commonService.getTimeDetails(startTime, endTime);
  }

  getDateInitials(day: string): any {
    return this.commonService.getDateInitials(day);
  }
}
