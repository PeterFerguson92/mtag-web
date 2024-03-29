import { Component, OnInit } from '@angular/core';
import data from "../../../data/bannerthree.json";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public banner = data;
  constructor() { }
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
