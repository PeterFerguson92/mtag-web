import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinistriesComponent } from './ministries.component';

const routes: Routes = [{ path: '', component: MinistriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinistriesRoutingModule { }
