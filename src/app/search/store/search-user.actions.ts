import { Action } from '@ngrx/store';

export const SEARCH_USER = 'SEARCH_USER';

export class SearchUser implements Action {
    readonly type = SEARCH_USER;
    constructor(public countUsers: number, public endSearch: boolean, public loading: boolean, public searchUsers: []) {
    }
}

export type SearchUserActions = SearchUser;