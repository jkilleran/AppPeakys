import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritemomentsPage } from './favoritemoments.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritemomentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritemomentsPageRoutingModule {}
