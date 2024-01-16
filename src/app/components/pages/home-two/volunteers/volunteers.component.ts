import { Component } from '@angular/core';
import { VolunteerHelperService } from 'src/app/components/helper/volunteer/volunteer-helper.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent extends VolunteerHelperService {

}
