import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Moment1Page } from './moment1.page';

const routes: Routes = [
  {
    path: '',
    component: Moment1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Moment1PageRoutingModule {}
