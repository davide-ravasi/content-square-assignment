import * as SearchReposActions from './search-repos.actions';

export const SEARCH_REPOS = 'SEARCH_REPOS';

export interface StateRepos {
    reposList: Repos;
}

export interface Repos {
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