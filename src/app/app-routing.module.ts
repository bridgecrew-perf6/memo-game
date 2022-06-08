import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./memo/memo.module').then(m => m.MemoModule) },
  { path: 'conecta', loadChildren: () => import('./conecta-cuatro/conecta-cuatro.module').then(m => m.ConectaCuatroModule) },
  { path: 'memo', loadChildren: () => import('./memo/memo.module').then(m => m.MemoModule) },
  { path: '**', loadChildren: () => import('./memo/memo.module').then(m => m.MemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
