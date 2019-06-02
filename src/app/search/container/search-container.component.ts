import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { GithubUsersService } from '../../services/users.service';
import * as userActions from '../store/search-user.actions';
import * as fromAppStore from '../../store/app.reducers';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  searchform: FormGroup;
  searchQuery: string;
  totalCount: number;
  items: [];

  constructor(
      private githubUsersService: GithubUsersService,
      private store: Store<fromAppStore.AppState>,
      private router: Router
      ) { }

  ngOnInit() {
    this.searchform = new FormGroup({
      search: new FormControl('', [
        Validators.required
    ])});


    // init store with empty array
    this.store.dispatch( new userActions.SearchUser(0, false, false, []));
  }

  onSubmit() {
    this.searchQuery = this.searchform.value.search;
    this.store.dispatch( new userActions.StartLoading());

    this.githubUsersService.searchUsers(this.searchQuery)
      .subscribe(
        (data) => {
          this.items = data.items;
          this.totalCount = data.items.length;
          this.store.dispatch( new userActions.SearchUser(this.totalCount, true, false, this.items));
        },
        (error) => {
          this.router.navigate(['/404']);
        }
      )
    }
}