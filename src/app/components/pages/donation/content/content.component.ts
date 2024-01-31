import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/components/data/service/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  bankAccountDetails: any;
  paymentType = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource('/members/bank-account').subscribe(
      (data: any) => {
        if (data.status === 'success' && data.result.length > 0) {
          this.bankAccountDetails = data.result[0];
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  isOnlinePayment(): boolean {
    return this.paymentType === 'online';
  }
}
