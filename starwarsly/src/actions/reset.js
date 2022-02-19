/** 
 * Action for resetting a the redux store store.
 * This action is referenced in the films, people, and planet reducers
*/

import { RESET_ALL } from "./types";


function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }