import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastRoutingModule } from './broadcast-routing.module';
import { BroadcastComponent } from './broadcast.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BroadcastComponent,
    ContentComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BroadcastRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class BroadcastModule { }
