import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { GithubUsersService } from '../../services/users.service';
import {SearchUser} from '../store/search-user.actions';
import * as fromSearchUser from '../store/search-user.reducer';

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
      private store: Store<fromSearchUser.AppState>
      ) { }

  ngOnInit() {
    this.searchform = new FormGroup({
      search: new FormControl('', [
        Validators.required
    ])});

    // init store with empty array
    this.store.dispatch( new SearchUser(0, false, []));
  }

  onSubmit() {
    this.searchQuery = this.searchform.value.search;
    this.store.dispatch( new SearchUser(0, true, []));

    this.githubUsersService.searchUsers(this.searchQuery)
      .subscribe(
        (data) => {
          this.items = data.items;
          this.totalCount = data.items.length;
          this.store.dispatch( new SearchUser(this.totalCount, false, this.items));
        }
      );
  }
}