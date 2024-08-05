import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChicasPageRoutingModule } from './chicas-routing.module';

import { ChicasPage } from './chicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ChicasPageRoutingModule
  ],
  declarations: [ChicasPage]
})
export class ChicasPageModule {}
