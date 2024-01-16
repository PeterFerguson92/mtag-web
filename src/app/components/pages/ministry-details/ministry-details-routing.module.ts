import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinistryDetailsComponent } from './ministry-details.component';

const routes: Routes = [{ path: '', component: MinistryDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinistryDetailsRoutingModule { }
