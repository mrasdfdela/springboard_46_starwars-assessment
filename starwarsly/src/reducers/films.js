/**
 * This reducer returns/updates the states of the film list. 
 * The actions will either set all films to their original state
 * or store a film id & its associated payload
 */

import { LOAD_FILM, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};


function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_FILM:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default films;