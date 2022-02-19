/**
 * The getFilmFromAPI function dispatches the gotFilm action. It makes
 * an asynchronous call to the Star Wars API, updates/cleans the data 
 * using regular expression, and passes that data into the gotFilm
 * action. Asynchronous calls return a promise (instead of an object), 
 * so middleware is used in the store to allow getFilmFromAPI to pass 
 * in film data retrieved from the API.
 */

import axios from 'axios';
import { LOAD_FILM } from "./types";


function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}


function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }