import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    const id = snapshot.paramMap.get('id');
    if (id)
    {
      this.apiService.getEventDetail(id).subscribe(
        (data) => {
          if (data.status === 'success')
          {
            this.event = data.result;
          }
        },
        (error) => {
          console.log(error);
        });
    }
  }
}
