import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import filter from "./filterReducer"
import place from "./placeReducer"

export default combineReducers({
  tweets,
  user,
  filter,
  place,
})
