import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolymorePageRoutingModule } from './polymore-routing.module';

import { PolymorePage } from './polymore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolymorePageRoutingModule
  ],
  declarations: [PolymorePage]
})
export class PolymorePageModule {}
