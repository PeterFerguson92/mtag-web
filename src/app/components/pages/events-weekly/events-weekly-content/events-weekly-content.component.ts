import { Component, OnInit } from '@angular/core';
import { EventHelperService } from 'src/app/components/helper/event/event-helper.service';

@Component({
  selector: 'app-events-weekly-content',
  templateUrl: './events-weekly-content.component.html',
  styleUrls: ['./events-weekly-content.component.css']
})
export class EventsWeeklyContentComponent extends EventHelperService implements OnInit {

  ngOnInit(): void {
  }

}
