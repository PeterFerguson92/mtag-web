import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css'],
})
export class BroadcastComponent implements OnInit {
  broadcastInfo: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/homepage/broadcast').subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.broadcastInfo = data.result[0];
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
