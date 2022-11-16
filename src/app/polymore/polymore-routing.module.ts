import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolymorePage } from './polymore.page';

const routes: Routes = [
  {
    path: '',
    component: PolymorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolymorePageRoutingModule {}
