/**
 * This film component displays a film based on the url parameter.
 * Using an ID, it looks up the film; if it is not currently in the
 * store, it dispatches an action that queries the film from the 
 * Star Wars API. The page displays a loading method until the 
 * film is retrieved.
 * If/when the film is saved in the store, the component checks the 
 * list of planet and character ID's associated w/ the film, checks
 * the store and displays their names them if their names are in 
 * that store. If their names are not in the store, it will display 
 * "Unknown" with a link to that planet/film.
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router-dom";
import { getFilmFromAPI } from "./actions/films";
import Sublist from "./Sublist";


function Film() {

  const {id} = useParams();
  const film = useSelector(st => st.films[id]);
  const planetState = useSelector(st => st.planets);
  const characterState = useSelector(st => st.people);
  const dispatch = useDispatch();
  const missing = !film;

  useEffect(function() {
    if (missing) {
      dispatch(getFilmFromAPI(id));
    }
  }, [missing, id, dispatch]);

  if (missing) return <h1 className="mt-5">loading...</h1>;

  const planets = film.planets.map(pid => ({
    id: pid,
    url: `/planets/${pid}`,
    display: planetState[pid] ? planetState[pid].name : "Unknown"
  }));

  const characters = film.characters.map(cid => ({
    id: cid,
    url: `/people/${cid}`,
    display: characterState[cid] ? characterState[cid].name : "Unknown"
  }));

  return (
    <div>

      <h1 className="mt-3 mb-3">
        {film.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p className="lead">{film.openingCrawl}</p>

      <p><b>Director: </b>{film.director}</p>

      <Sublist title="Planets" items={planets} />
      <Sublist title="People" items={characters} />
    </div>
  );
}

export default Film;