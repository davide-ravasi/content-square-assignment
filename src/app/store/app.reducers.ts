import * as fromReposList from '../repos/store/search-repos.reducer';
import * as fromSearch from '../search/store/search-user.reducer';

export interface AppState {
    reposList: fromReposList.State,
    usersList: fromSearch.State;
}
