import { createStore, Store } from 'redux';
import rootReducer from './rootReducer';

export interface ApplicationStore {
    
}

const store: Store<ApplicationStore> = createStore( rootReducer );

export default store;