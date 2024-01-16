import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerDetailsComponent } from './volunteer-details.component';

const routes: Routes = [{ path: '', component: VolunteerDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerDetailsRoutingModule { }
