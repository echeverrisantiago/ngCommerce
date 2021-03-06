import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        children: [
          {
          path: '',
          redirectTo: 'login'
          },
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          }
    ]
      },
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule]
})
export class AuthRoutingModule { }

