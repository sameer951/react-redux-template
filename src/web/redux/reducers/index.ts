import { combineReducers } from "redux"
import { Auth } from "./auth.reducer"
import { counterReducer } from "./count.reducer"
import { Env } from "./env.reducer"
import { timerReducer } from "./timer.reducer"

// COMBINED REDUCERS
const reducers = {
  env: Env,
  auth: Auth,
  counter: counterReducer,
  timer: timerReducer,
}

export default combineReducers(reducers)