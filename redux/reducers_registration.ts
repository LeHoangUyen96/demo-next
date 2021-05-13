import { combineReducers } from 'redux'
import countReducer from './logic/reducer/counter_reducer'
import { usersReducer } from './logic/reducer/users_reducer';

const rootReducer = combineReducers({
    count: countReducer,
    users: usersReducer,
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;