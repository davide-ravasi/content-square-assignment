import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { GithubReposService } from '../../services/repos.service';
import { SearchRepos } from '../store/search-repos.actions';
import * as fromAppStore from '../../store/app.reducers';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  public totalCount: number;
  public repos: [];
  public reposUser: string;
  public userPhoto: string;

  constructor(
      private githubReposService: GithubReposService,
      private store: Store<fromAppStore.AppState>,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(params => {
      this.reposUser = params['user'];
    });

    this.store.dispatch( new SearchRepos(0, true, []));

    this.githubReposService.getUsersPhoto(this.reposUser)
      .subscribe(
        (data) => {
          this.userPhoto = data.avatar_url;
      }
    );

    this.githubReposService.searchRepos(this.reposUser)
      .subscribe(
        (data) => {
          this.repos = data;
          this.totalCount = data ? data.length : 0;
          this.store.dispatch( new SearchRepos(this.totalCount, false, this.repos));
        }
    );
  }
}
