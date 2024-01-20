import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent  {
  @Input() leaders: any;
  @Input() header: any;
  @Input() title: any;
  @Input() leadershipBoardBackgroundImage: any;
}
