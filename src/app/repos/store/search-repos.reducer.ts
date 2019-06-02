import * as SearchReposActions from './search-repos.actions';

export interface State {
    countRepos: number;
    userName: string;
    userPhoto: string;
    loading: boolean;
    repos: [];
}

const initialState = {
  countRepos: 0,
  userName: '',
  userPhoto: '',
  loading: true,
  repos: []
};

export function searchReposReducer( state = initialState, action: SearchReposActions.SearchReposActions) {
    switch (action.type) {
        case SearchReposActions.USER_DATA:
            return {
                ...state,
                userName: action.userName,
                userPhoto: action.userPhoto
            }
        case SearchReposActions.SEARCH_REPOS:
            return {
                ...state,
                count: action.countRepos,
                loading: action.loading,
                repos: action.searchRepos
            };
        default:
            return state;
    }
}