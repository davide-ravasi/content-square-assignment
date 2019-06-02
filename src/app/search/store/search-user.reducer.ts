import * as SearchUserActions from './search-user.actions';

export interface State {
    count: number;
    endSearch: boolean;
    loading: boolean;
    users: [];
}

const initialState = {
  count: 0,
  endSearch: false,
  loading: false,
  users: []
};

export function searchUserReducer( state = initialState, action: SearchUserActions.SearchUserActions) {
    switch (action.type) {
        case SearchUserActions.SEARCH_USER:
            return {
                ...state,
                count: action.countUsers,
                endSearch: action.endSearch,
                loading: action.loading,
                users: action.searchUsers
            };
        default:
            return state;
    }
}