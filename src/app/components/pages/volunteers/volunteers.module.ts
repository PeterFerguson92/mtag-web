import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { VolunteersRoutingModule } from './volunteers-routing.module';
import { VolunteersComponent } from './volunteers.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    VolunteersComponent,
    ContentComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    VolunteersRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class VolunteersModule { }
