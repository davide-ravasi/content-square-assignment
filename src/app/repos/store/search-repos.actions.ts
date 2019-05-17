import { Action } from '@ngrx/store';

export const SEARCH_REPOS = 'SEARCH_REPOS';

export class SearchRepos implements Action {
    readonly type = SEARCH_REPOS;
    constructor(public countRepos: number, public loading: boolean, public searchRepos: []) { }
}

export type SearchReposActions = SearchRepos;