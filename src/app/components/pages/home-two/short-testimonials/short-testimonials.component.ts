import { Component } from '@angular/core';
import { TestimonialHelperService } from 'src/app/components/helper/testimonial/testimonial-helper.service';

@Component({
  selector: 'app-short-testimonials',
  templateUrl: './short-testimonials.component.html',
  styleUrls: ['./short-testimonials.component.css']
})
export class ShortTestimonialsComponent extends TestimonialHelperService {
  settings = {
    slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: true, autoplay: true
  };
}