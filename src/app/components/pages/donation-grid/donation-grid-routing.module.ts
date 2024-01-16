import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationGridComponent } from './donation-grid.component';

const routes: Routes = [{ path: '', component: DonationGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationGridRoutingModule { }
