import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { searchUserReducer } from '../search/store/search-user.reducer';
import { searchReposReducer } from '../repos/store/search-repos.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({searchUserList: searchUserReducer, searchReposList: searchReposReducer}),
  ],
  exports: [StoreModule]
})
export class CoreModule { }
