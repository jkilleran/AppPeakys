import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Moment3PageRoutingModule } from './moment3-routing.module';

import { Moment3Page } from './moment3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Moment3PageRoutingModule
  ],
  declarations: [Moment3Page]
})
export class Moment3PageModule {}
