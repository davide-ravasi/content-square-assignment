import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '../app-routing.module';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { searchReposReducer } from './store/search-repos.reducer';

@NgModule({
  declarations: [ReposListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('searchReposList', searchReposReducer),
  ],
  exports: [
      ReposListComponent,
      StoreModule
  ]
})
export class ReposModule { }
