import { Component } from '@angular/core';
import { DonationHelperService } from 'src/app/components/helper/donation/donation-helper.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent extends DonationHelperService {
}
