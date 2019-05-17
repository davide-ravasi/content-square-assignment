import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { ReposModule } from './repos/repos.module';
import { GithubUsersService } from './services/users.service';
import { GithubReposService } from './services/repos.service';
import { ReposComponent } from './repos/container/repos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    ReposModule,
    CoreModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
      }),
    BrowserAnimationsModule,
  ],
  providers: [GithubUsersService, GithubReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
