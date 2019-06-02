import { Action } from '@ngrx/store';

export const START_LOADING = 'START_LOADING';
export const SEARCH_USER = 'SEARCH_USER';

export class StartLoading implements Action {
    readonly type = START_LOADING;
    constructor() {
    }
}

export class SearchUser implements Action {
    readonly type = SEARCH_USER;
    constructor(public countUsers: number, public endSearch: boolean, public loading: boolean, public searchUsers: []) {
    }
}

export type SearchUserActions = StartLoading | SearchUser;