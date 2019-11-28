import { combineReducers } from 'redux';
import { app } from '../app.module';
import usersReducer from './reducers/users';

app.config([
  '$ngReduxProvider',
  $ngReduxProvider => {
    $ngReduxProvider.createStoreWith(
      combineReducers({
        users: usersReducer,
      }),
    );
  },
]);
