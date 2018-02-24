import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YearListComponent } from './components/year-list/year-list.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { StatsViewComponent } from './stats-view/stats-view.component';
import { MainComponent } from './components/main/main.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    YearListComponent,
    PlayerListComponent,
    StatsViewComponent,
    MainComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
