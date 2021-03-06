import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { SignupComponent } from './signup/signup.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'playlists', component: PlaylistComponent},
  { path: '', component: PlayerComponent },
  // {path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }