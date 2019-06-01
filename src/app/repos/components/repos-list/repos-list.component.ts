import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAppStore from '../../../store/app.reducers';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  foundRepos: Observable<any>;
  reposUser: string;

  constructor(private store: Store<fromAppStore.AppState>) { }

  ngOnInit() {
    this.foundRepos = this.store.select('searchReposList');
  }
}
