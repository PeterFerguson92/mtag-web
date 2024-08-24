import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CommonService } from 'src/app/components/data/service/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() ministries: any;

  constructor(private commonService: CommonService) {}

  getImgPath(id: string): SafeResourceUrl {
    return this.commonService.getImgPath(id);
  }
}
