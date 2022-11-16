import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Moment1PageRoutingModule } from './moment1-routing.module';

import { Moment1Page } from './moment1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Moment1PageRoutingModule
  ],
  declarations: [Moment1Page]
})
export class Moment1PageModule {}
