import { Component } from '@angular/core';
import { MinistryHelperService } from 'src/app/components/helper/ministry/ministry-helper.service';

@Component({
  selector: 'app-ministry-two',
  templateUrl: './ministry-two.component.html',
  styleUrls: ['./ministry-two.component.css']
})
export class MinistryTwoComponent extends MinistryHelperService {
  settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    prevArrow: '.portfolio-section .slider-prev',
    nextArrow: '.portfolio-section .slider-next',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
}