import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsWeeklyComponent } from './events-weekly.component';

const routes: Routes = [{ path: '', component: EventsWeeklyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsWeeklyRoutingModule { }
