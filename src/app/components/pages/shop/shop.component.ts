import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  text =
    'we are committed to protecting your privacy. We collect and use your information solely to provide a better experience and communicate with you about our services, events, and ministry opportunities';
  constructor() {}

  ngOnInit(): void {}
}
