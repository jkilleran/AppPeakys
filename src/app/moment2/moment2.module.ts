import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Moment2PageRoutingModule } from './moment2-routing.module';

import { Moment2Page } from './moment2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Moment2PageRoutingModule
  ],
  declarations: [Moment2Page]
})
export class Moment2PageModule {}
