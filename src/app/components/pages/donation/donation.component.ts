import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  text = '';
  constructor() {}

  ngOnInit(): void {
    this.text = `Each man should give what he has decided in his heart to give,
    not reluctantly or under compulsion, for God loves a cheerful giver.\n
    2 Corinthians 9:7: `;
  }
}
