import { Component } from '@angular/core';
import { VolunteerHelperService } from 'src/app/components/helper/volunteer/volunteer-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends VolunteerHelperService {
}
