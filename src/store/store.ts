import { createStore } from 'redux';
import { UserAuthType } from './auth/authReducer';
import reducers from './reducers';

const store = createStore(reducers);

export interface RootState {
  auth: UserAuthType;
}

export type AppDispatch = typeof store.dispatch;

export default store;
