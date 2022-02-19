/**
 * This reducer returns/updates the states of the planet list.
 * The actions will either set all planets to their original state
 * (with no details) or store a planet id & its associated payload
 * to the store.
 */

import { LOAD_PLANET, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

function planets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PLANET:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
      };

    default:
      return state;
  }
}

export default planets;
