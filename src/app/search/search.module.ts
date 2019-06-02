import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';
import { SearchContainerComponent } from './container/search-container.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { searchUserReducer } from './store/search-user.reducer';

@NgModule({
  declarations: [SearchContainerComponent, UsersListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    StoreModule.forFeature('searchUserList', searchUserReducer),
  ],
  exports: [
    SearchContainerComponent,
    UsersListComponent,
    StoreModule
  ]
})
export class SearchModule { }