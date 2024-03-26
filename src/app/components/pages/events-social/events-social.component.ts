import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-events-social',
  templateUrl: './events-social.component.html',
  styleUrls: ['./events-social.component.css']
})
export class EventsSocialComponent implements OnInit {
  socialEvents: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getResource('/activities/socialevent').subscribe(
      (data: any) => {
        if (data.status === 'success')
        {
          const rawEvents = data.result;
          // tslint:disable-next-line:typedef
          this.socialEvents = rawEvents.sort(function(a: any, b: any) {
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
