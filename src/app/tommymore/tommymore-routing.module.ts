import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TommymorePage } from './tommymore.page';

const routes: Routes = [
  {
    path: '',
    component: TommymorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TommymorePageRoutingModule {}
