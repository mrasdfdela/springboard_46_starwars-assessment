/**
 * This combines reducers from the other files and exports
 * a root reducer.
 */

import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";

export default combineReducers({
  films,
  planets,
  people,
});