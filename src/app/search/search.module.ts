import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from '../app-routing.module';
import { SearchContainerComponent } from './container/search-container.component';
import { UsersListComponent } from './container/users-list/users-list.component';

@NgModule({
  declarations: [SearchContainerComponent, UsersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    SearchContainerComponent,
    UsersListComponent
  ]
})
export class SearchModule { }