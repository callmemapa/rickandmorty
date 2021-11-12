import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/** Components */
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

/** Modules */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    CoreModule,
    CharacterModule,
    EpisodeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
