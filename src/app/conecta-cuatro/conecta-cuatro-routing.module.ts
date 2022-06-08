import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConectaCuatroComponent } from './conecta-cuatro.component';

const routes: Routes = [{ path: '', component: ConectaCuatroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConectaCuatroRoutingModule { }
