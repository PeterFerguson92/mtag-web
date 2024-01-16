import { Component } from '@angular/core';
import { DonationHelperService } from 'src/app/components/helper/donation/donation-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends DonationHelperService {

}
