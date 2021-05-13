import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../type_action/counter_type_action';

export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});

export default { incrementCounter, decrementCounter };

