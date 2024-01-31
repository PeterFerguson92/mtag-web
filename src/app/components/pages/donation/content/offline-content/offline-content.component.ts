import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-content',
  templateUrl: './offline-content.component.html',
  styleUrls: ['./offline-content.component.css']
})
export class OfflineContentComponent implements OnInit {
  @Input() bankDetails: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
