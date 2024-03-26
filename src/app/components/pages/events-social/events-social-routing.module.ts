import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsSocialComponent } from './events-social.component';

const routes: Routes = [{ path: '', component: EventsSocialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsSocialRoutingModule { }
