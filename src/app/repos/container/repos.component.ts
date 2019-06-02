import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { GithubReposService } from '../../services/repos.service';
import * as reposActions from '../store/search-repos.actions';
import * as fromAppStore from '../../store/app.reducers';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  public totalCount: number;
  public repos: [];
  public userName: string;
  public userPhoto: string;

  constructor(
      private githubReposService: GithubReposService,
      private store: Store<fromAppStore.AppState>,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(params => {
      this.userName = params['user'];
    });

    this.store.dispatch( new reposActions.SearchRepos(0, true, []));

    this.githubReposService.getUsersPhoto(this.userName)
      .subscribe(
        (data) => {
          this.userPhoto = data.avatar_url;
          this.store.dispatch( new reposActions.UserData(this.userName, this.userPhoto));
      }
    );

    this.githubReposService.searchRepos(this.userName)
      .subscribe(
        (data) => {
          this.repos = data;
          this.totalCount = data ? data.length : 0;
          this.store.dispatch( new reposActions.SearchRepos(this.totalCount, false, this.repos));
        },
        (error) => {
          this.router.navigate(['/404']);
        }
    );
  }
}
