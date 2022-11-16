import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JohnmorePage } from './johnmore.page';

const routes: Routes = [
  {
    path: '',
    component: JohnmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JohnmorePageRoutingModule {}
