import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  programs: any[] = [];
  text = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.text = `Stay informed about our upcoming events and programs. We have so many more coming up do well to participate and you will surely be impacted and blessed!`;
    this.apiService.getResource('/activities/program/active').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          const rawEvents = data.result;
          // tslint:disable-next-line:typedef
          this.programs = rawEvents.sort(function (a: any, b: any) {
            return a.start_date > b.start_date
              ? 1
              : b.start_date > a.start_date
              ? -1
              : 0;
          });
        } else {
          this.programs = [];
        }
      },
      (error: any) => {
        this.programs = [];
        console.log(error);
      }
    );
  }
}
