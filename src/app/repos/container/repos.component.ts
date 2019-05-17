import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { GithubReposService } from '../../services/repos.service';
import { SearchRepos } from '../store/search-repos.actions';
import * as fromSearchRepos from '../store/search-repos.reducer';

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
      private store: Store<fromSearchRepos.ReposState>,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(params => {
      this.reposUser = params['user'];
    });

    this.store.dispatch( new SearchRepos(0, true, []));

    this.githubReposService.searchRepos(this.reposUser)
      .subscribe(
        (data) => {
          this.repos = data;
          this.userPhoto = this.repos[0].owner.avatar_url;
          this.totalCount = data ? data.length : 0;
          this.store.dispatch( new SearchRepos(this.totalCount, false, this.repos));
        }
    );
  }
}
