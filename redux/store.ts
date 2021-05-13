import { createStore} from 'redux';
import rootReducer from '../redux/reducers_registration';

export const makeStore = () => {
  return createStore(rootReducer);
};
