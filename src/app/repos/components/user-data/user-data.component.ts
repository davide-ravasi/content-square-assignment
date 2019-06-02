import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAppStore from '../../../store/app.reducers';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  public foundRepos: Observable<any>;

  constructor(private store: Store<fromAppStore.AppState>) { }

  ngOnInit() {
    this.foundRepos = this.store.select('searchReposList');
  }
}
