import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { ServicesComponent } from './services/services.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { MinistryComponent } from './ministry/ministry.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ShortTestimonialsComponent } from './short-testimonials/short-testimonials.component';
import { SuccessRateComponent } from './success-rate/success-rate.component';


@NgModule({
  declarations: [
    HomeTwoComponent,
    BannerComponent,
    AboutTextComponent,
    ServicesComponent,
    PageCtaComponent,
    VolunteersComponent,
    MinistryComponent,
    TestimonialsComponent,
    BlogsComponent,
    ShortTestimonialsComponent,
    SuccessRateComponent
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeTwoModule { }
