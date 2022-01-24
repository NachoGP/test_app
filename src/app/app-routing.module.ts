import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsideComponent } from './views/inside/inside.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'insideapp',
    component: InsideComponent,
    loadChildren: () => import('./views/inside/inside.module').then(m => m.InsideModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
