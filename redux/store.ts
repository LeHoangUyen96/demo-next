import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers_registration';

export const makeStore = () => {
  return createStore(rootReducer);
};

