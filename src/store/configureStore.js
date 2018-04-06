import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactionReducer from '../reducers/transactions';

export default () => {
  const store = createStore(
    combineReducers({
      transaction: transactionReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
