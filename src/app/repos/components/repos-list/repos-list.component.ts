import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  foundRepos: Observable<any>;
  reposUser: string;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.foundRepos = this.store.select('searchReposList');
  }
}
