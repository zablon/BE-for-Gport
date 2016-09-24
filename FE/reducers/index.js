import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import filter from "./filterReducer"

export default combineReducers({
  tweets,
  user,
  filter,
})
