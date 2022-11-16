import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Moment3Page } from './moment3.page';

const routes: Routes = [
  {
    path: '',
    component: Moment3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Moment3PageRoutingModule {}
