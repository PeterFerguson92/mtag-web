import { Component, OnInit } from '@angular/core';
import data from "../../../data/broadcast.json";

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {
  public broadcast = data;
  constructor() { }

  ngOnInit(): void {
  }

}
