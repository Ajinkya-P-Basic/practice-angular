import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login.guard';
import { CelebrationComponent } from './celebration/celebration.component';

const routes: Routes = [
  {
    path: 'bday',
    component: CelebrationComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: 'bday', pathMatch: 'full' },
	{ path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
