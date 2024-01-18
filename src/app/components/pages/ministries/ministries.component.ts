import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../data/service/api.service';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css']
})
export class MinistriesComponent implements OnInit {
  ministries = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMinistry().subscribe(
      (data: any) => {
        if (data.status === 'success')
        {
          this.ministries = data.result;
        } else {
          this.ministries = [];
        }
      },
      (error: any) => {
        this.ministries = [];
        console.log(error);
      }
    );
  }

}
