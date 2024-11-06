import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-events-social',
  templateUrl: './events-social.component.html',
  styleUrls: ['./events-social.component.css'],
})
export class EventsSocialComponent implements OnInit {
  socialEvents: any[] = [];
  text = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.text = `In the house of the Lord, there is liberty and as welcoming as we are, we always make it a point to make every single person that enters our doors feel at ease and very comfortable.
      We understand that language can sometimes become a barrier to allow you to be immersed into the service, therefore we are running three services, one in English and the other in Twi to ensure you have a clear understanding of what is being shared, including the funny jokes
    `;
    this.apiService.getResource('/activities/socialevent').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          const rawEvents = data.result;
          // tslint:disable-next-line:typedef
          this.socialEvents = rawEvents.sort(function (a: any, b: any) {
            return a.start_date > b.start_date
              ? 1
              : b.start_date > a.start_date
              ? -1
              : 0;
          });
        } else {
          this.socialEvents = [];
        }
      },
      (error: any) => {
        this.socialEvents = [];
        console.log(error);
      }
    );
  }
}
