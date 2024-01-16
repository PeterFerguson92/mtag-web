import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { BlockBoxComponent } from './block-box/block-box.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { DonationComponent } from './donation/donation.component';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { MinistryComponent } from './ministry/ministry.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PageCtaComponent } from './page-cta/page-cta.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BlockBoxComponent,
    AboutTextComponent,
    DonationComponent,
    BroadcastComponent,
    MinistryComponent,
    VolunteersComponent,
    TestimonialsComponent,
    BlogsComponent,
    PageCtaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeModule { }
