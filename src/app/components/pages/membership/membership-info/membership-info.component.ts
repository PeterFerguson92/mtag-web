import { Component, OnInit } from '@angular/core';
import data from '../../../data/contactinfo.json';

@Component({
  selector: 'app-membership-info',
  templateUrl: './membership-info.component.html',
  styleUrls: ['./membership-info.component.css']
})
export class MembershipInfoComponent implements OnInit {
  public contactinfo = data;

  constructor() { }

  ngOnInit(): void {
  }

}
