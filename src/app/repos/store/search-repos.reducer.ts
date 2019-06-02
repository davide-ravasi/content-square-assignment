import * as SearchReposActions from './search-repos.actions';

export interface State {
    repos: [];
}

const initialState = {
  countRepos: 0,
  loading: true,
  repos: []
};

export function searchReposReducer( state = initialState, action: SearchReposActions.SearchReposActions) {
    switch (action.type) {
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