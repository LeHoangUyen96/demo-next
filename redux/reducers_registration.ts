import { combineReducers } from 'redux'
import countReducer from './logic/reducer'

const rootReducer = combineReducers({
    count: countReducer,
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;