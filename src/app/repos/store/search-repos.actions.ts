import { Action } from '@ngrx/store';

export const SEARCH_REPOS = 'SEARCH_REPOS';
export const USER_DATA = 'USER_DATA';

export class UserData implements Action {
    readonly type = USER_DATA;
    constructor(public userName: string, public userPhoto: string) {}
}

export class SearchRepos implements Action {
    readonly type = SEARCH_REPOS;
    constructor(public countRepos: number, public loading: boolean, public searchRepos: []) { }
}

export type SearchReposActions = UserData | SearchRepos;