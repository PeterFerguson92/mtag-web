import { Component } from '@angular/core';
import { MinistryHelperService } from 'src/app/components/helper/ministry/ministry-helper.service';

@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
export class MinistryComponent extends MinistryHelperService {

}
