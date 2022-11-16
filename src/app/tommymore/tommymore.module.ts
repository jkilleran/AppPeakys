import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TommymorePageRoutingModule } from './tommymore-routing.module';

import { TommymorePage } from './tommymore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TommymorePageRoutingModule
  ],
  declarations: [TommymorePage]
})
export class TommymorePageModule {}
