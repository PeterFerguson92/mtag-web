import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  text =
    'By using this website, you agree to our Terms and Conditions. Our site is provided for informational and ministry purposes.';
  constructor() {}

  ngOnInit(): void {}
}
