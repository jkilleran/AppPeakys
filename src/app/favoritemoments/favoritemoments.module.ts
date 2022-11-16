import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritemomentsPageRoutingModule } from './favoritemoments-routing.module';

import { FavoritemomentsPage } from './favoritemoments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritemomentsPageRoutingModule
  ],
  declarations: [FavoritemomentsPage]
})
export class FavoritemomentsPageModule {}
