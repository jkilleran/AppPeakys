import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArthurmorePageRoutingModule } from './arthurmore-routing.module';

import { ArthurmorePage } from './arthurmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArthurmorePageRoutingModule
  ],
  declarations: [ArthurmorePage]
})
export class ArthurmorePageModule {}
