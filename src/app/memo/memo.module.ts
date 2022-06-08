import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoRoutingModule } from './memo-routing.module';
import { MemoComponent } from './memo.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MemoComponent
  ],
  imports: [
    CommonModule,
    MemoRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MemoModule { }
