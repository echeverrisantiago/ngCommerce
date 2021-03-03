import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules, RouterModule } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  {
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuardGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: '**',
      redirectTo: 'auth'
    }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
