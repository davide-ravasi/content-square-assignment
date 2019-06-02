import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '../app-routing.module';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { searchReposReducer } from './store/search-repos.reducer';
import { UserDataComponent } from './components/user-data/user-data.component';

@NgModule({
  declarations: [ReposListComponent, UserDataComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    StoreModule.forFeature('searchReposList', searchReposReducer),
  ],
  exports: [
      ReposListComponent,
      UserDataComponent,
      StoreModule
  ]
})
export class ReposModule { }
