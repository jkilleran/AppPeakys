import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmylivePage } from './inmylive.page';

const routes: Routes = [
  {
    path: '',
    component: InmylivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmylivePageRoutingModule {}
