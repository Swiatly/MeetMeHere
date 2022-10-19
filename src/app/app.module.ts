import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomePageLoggedOutComponent } from './welcome-page-logged-out/welcome-page-logged-out.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageLoggedOutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
