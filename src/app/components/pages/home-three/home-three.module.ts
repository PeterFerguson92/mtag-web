import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { PlyrModule } from 'ngx-plyr';

import { HomeThreeRoutingModule } from './home-three-routing.module';
import { HomeThreeComponent } from './home-three.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { NextEventComponent } from './next-event/next-event.component';
import { NextSermonComponent } from './next-sermon/next-sermon.component';
import { ServicesComponent } from './services/services.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { PageCtaComponent } from './page-cta/page-cta.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { MinistryTwoComponent } from './ministry-two/ministry-two.component';
import { FaqsComponent } from './faqs/faqs.component';
import { VideoComponent } from './video/video.component';
import { MinistryComponent } from './ministry/ministry.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
    HomeThreeComponent,
    BannerComponent,
    NextEventComponent,
    NextSermonComponent,
    ServicesComponent,
    AboutTextComponent,
    PageCtaComponent,
    LocationMapComponent,
    MinistryTwoComponent,
    FaqsComponent,
    VideoComponent,
    MinistryComponent,
    BlogsComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    HomeThreeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    PlyrModule
  ]
})
export class HomeThreeModule { }
