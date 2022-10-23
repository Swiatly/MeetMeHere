import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomePageLoggedOutComponent } from './welcome-page-logged-out/welcome-page-logged-out.component';
import { WelcomePageLoggedInComponent } from './welcome-page-logged-in/welcome-page-logged-in.component';
import { MainBoardComponent } from './welcome-page-logged-in/main-board/main-board.component';
import { SettingsComponent } from './welcome-page-logged-in/settings/settings.component';
import { FriendsListComponent } from './welcome-page-logged-in/friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageLoggedOutComponent,
    WelcomePageLoggedInComponent,
    MainBoardComponent,
    SettingsComponent,
    FriendsListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
