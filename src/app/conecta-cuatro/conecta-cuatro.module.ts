import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConectaCuatroRoutingModule } from './conecta-cuatro-routing.module';
import { ConectaCuatroComponent } from './conecta-cuatro.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FichasPipe } from './fichas.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    ConectaCuatroComponent,
    FichasPipe
  ],
  imports: [
    CommonModule,
    ConectaCuatroRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ]
})
export class ConectaCuatroModule { }
