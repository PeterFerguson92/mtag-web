import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MinistriesRoutingModule } from './ministries-routing.module';
import { MinistriesComponent } from './ministries.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    MinistriesComponent,
    ContentComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    MinistriesRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class MinistriesModule { }
