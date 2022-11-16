import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohnmorePageRoutingModule } from './johnmore-routing.module';

import { JohnmorePage } from './johnmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohnmorePageRoutingModule
  ],
  declarations: [JohnmorePage]
})
export class JohnmorePageModule {}
