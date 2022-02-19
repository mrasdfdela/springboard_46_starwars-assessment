/**
 * The getPersonFromAPI function dispatches the gotPerson action. It makes
 * an asynchronous call to the Star Wars API, updates/cleans the data 
 * using regular expression, and passes that data into the gotPerson
 * action. Asynchronous calls return a promise (instead of an object), 
 * so middleware is used in the store to allow getPersonFromAPI to pass 
 * in film data retrieved from the API.
 */
import axios from "axios";
import { LOAD_PERSON } from "./types";


function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let {
      name,
      gender,
      birth_year: birthYear,
      homeworld,
      films
    } = res.data;

    films = films.map(url => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}


function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}


export { getPersonFromAPI }