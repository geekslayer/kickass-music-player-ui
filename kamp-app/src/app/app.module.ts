import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap  } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { PlayerComponent } from './player/player.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { environment } from '../environments/environment';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    PlayerComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService
    }
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  async ngDoBootstrap(app) {

    try {
      await keycloakService.init({ config: environment.keycloak });
      app.bootstrap(AppComponent);
    } catch (error) {
      console.error('Keycloak init failed', error);
    }
  }
}