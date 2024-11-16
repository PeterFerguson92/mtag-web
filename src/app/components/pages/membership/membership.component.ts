import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
})
export class MembershipComponent implements OnInit {
  text = '';
  constructor() {}

  ngOnInit(): void {
    this.text =
      'we believe that church membership is a meaningful commitment to a community of faith and a step towards spiritual growth. Becoming a member signifies that you share our beliefs, values, and vision, and that you desire to be part of what God is doing in and through our church';
  }
}
