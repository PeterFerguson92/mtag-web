import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesTwoComponent } from './services-two.component';

const routes: Routes = [{ path: '', component: ServicesTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesTwoRoutingModule { }
