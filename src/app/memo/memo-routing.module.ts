import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoComponent } from './memo.component';

const routes: Routes = [{ path: '', component: MemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoRoutingModule { }
