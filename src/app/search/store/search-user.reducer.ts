import * as SearchUserActions from './search-user.actions';

export interface State {
    count: number;
    loading: boolean;
    users: [];
}

const initialState = {
  count: 0,
  loading: false,
  users: []
};

export function searchUserReducer( state = initialState, action: SearchUserActions.SearchUserActions) {
    switch (action.type) {
        case SearchUserActions.SEARCH_USER:
            return {
                ...state,
                count: action.countUsers,
                loading: action.loading,
                users: action.searchUsers
            };
        default:
            return state;
    }
}