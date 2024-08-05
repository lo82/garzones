import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bar/:id',
    loadChildren: () => import('./bar/bar.module').then( m => m.BarPageModule)
  },
  {
    path: 'chicas/:id/:nombre',
    loadChildren: () => import('./chicas/chicas.module').then( m => m.ChicasPageModule)
  },
  {
    path: 'chicas',
    loadChildren: () => import('./chicas/chicas.module').then( m => m.ChicasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
