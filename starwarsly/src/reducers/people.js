/**
 * This reducer returns/updates the states of the person list. 
 * The actions will either set all people to their original state
 * (with no details) or store a person id & its associated payload
 * to the store.
 */

import { LOAD_PERSON, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};


function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PERSON:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default people;