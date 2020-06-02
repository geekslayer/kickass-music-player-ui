import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { SignupComponent } from './signup/signup.component';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { AppAuthGuard } from './authentication/appauthguard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AppAuthGuard]},
  {path: 'signup', component: SignupComponent},
  { path: '', component: PlayerComponent },
  // {path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
