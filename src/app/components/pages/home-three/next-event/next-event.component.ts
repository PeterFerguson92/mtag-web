import { Component } from '@angular/core';
import { EventHelperService } from 'src/app/components/helper/event/event-helper.service';

@Component({
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.css']
})
export class NextEventComponent extends EventHelperService {
}
