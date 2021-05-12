import {DECREMENT_COUNTER, INCREMENT_COUNTER} from './type_action';

const countReducer = (state = { value: 0 }, action) => {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return {...state, value: -- state.value,
      }
    case DECREMENT_COUNTER:
      return {...state, value: ++ state.value,
      }
    default:
      return {...state};
  }
}
export default countReducer;
