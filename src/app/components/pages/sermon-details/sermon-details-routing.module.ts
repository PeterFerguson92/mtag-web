import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SermonDetailsComponent } from './sermon-details.component';

const routes: Routes = [{ path: '', component: SermonDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonDetailsRoutingModule { }
