/**
 * The getPlanetFromAPI function dispatches the gotPlanet action. It makes
 * an asynchronous call to the Star Wars API, updates/cleans the data 
 * using regular expression, and passes that data into the gotPlanet
 * action. Asynchronous calls return a promise (instead of an object), 
 * so middleware is used in the store to allow getPlanetFromAPI to pass 
 * in film data retrieved from the API.
 */
import axios from "axios";
import { LOAD_PLANET } from "./types";


function getPlanetFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let {
      name,
      population,
      climate,
      residents,
      films
    } = res.data;

    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);

    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}


function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}


export { getPlanetFromAPI }