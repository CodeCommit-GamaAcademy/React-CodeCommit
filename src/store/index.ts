import { createStore, Store } from 'redux';
import { FilteredUser } from '../types/user';
import rootReducer from './rootReducer';

export interface ApplicationStore {
    user: FilteredUser | undefined
}

const store: Store<ApplicationStore> = createStore( rootReducer );

export default store;