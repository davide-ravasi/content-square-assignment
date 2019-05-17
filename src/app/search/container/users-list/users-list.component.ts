import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  foundUsers: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
       this.foundUsers = this.store.select('searchUserList');
  }
}
