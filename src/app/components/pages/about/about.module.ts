import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { ApprochComponent } from './approch/approch.component';
import { HistoryComponent } from './history/history.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutTextComponent,
    ApprochComponent,
    HistoryComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AboutModule { }
