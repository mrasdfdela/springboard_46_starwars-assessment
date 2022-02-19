/**
 * This Person component displays a film based on the url parameter.
 * Using an ID, it looks up the character; if it is not currently in the
 * store, it dispatches an action that queries the character from the 
 * Star Wars API. The page displays a loading method until the 
 * character is retrieved.
 * If/when the character is saved in the store, the component checks the 
 * list of planet and film ID's associated w/ the character, checks the
 * store and displays their names them if their names are in that store. 
 * If their names are not in the store, it will display "Unknown" with a
 * link to that planet/film.
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";


function Person() {
  
  const dispatch = useDispatch();
  const {id} = useParams();
  const person = useSelector(st => st.people[id]);
  const planetState = useSelector(st => st.planets);
  const filmState = useSelector(st => st.films);
  const missing = !person;

  useEffect(function() {
    if (missing) {
      dispatch(getPersonFromAPI(id));
    }
  }, [id, missing, dispatch]);

  if (missing) return "loading...";

  const hw = person.homeworld;
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown"
  };

  const films = person.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="my-3">
        {person.name}
        <small className="text-muted float-right">{person.id}</small>
      </h1>

      <p><b>Gender: </b>{person.gender}</p>
      <p><b>Birth Year: </b>{person.birthYear}</p>
      <p>
        <b>Homeworld: </b>
        <Link to={homeworld.url}>{homeworld.display}</Link>
      </p>

      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Person;

