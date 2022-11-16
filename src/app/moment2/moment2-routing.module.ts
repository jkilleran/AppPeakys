import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Moment2Page } from './moment2.page';

const routes: Routes = [
  {
    path: '',
    component: Moment2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Moment2PageRoutingModule {}
