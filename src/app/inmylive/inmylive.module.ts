import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmylivePageRoutingModule } from './inmylive-routing.module';

import { InmylivePage } from './inmylive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmylivePageRoutingModule
  ],
  declarations: [InmylivePage]
})
export class InmylivePageModule {}
