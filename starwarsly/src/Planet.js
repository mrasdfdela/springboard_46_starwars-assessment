/**
 * This Planet component displays a film based on the url parameter.
 * Using an ID, it looks up the planet; if it is not currently in the
 * store, it dispatches an action that queries the planet from the
 * Star Wars API. The page displays a loading method until the
 * planet is retrieved.
 * If/when the planet is saved in the store, the component checks the
 * list of person and film ID's associated w/ the planet, checks the
 * store and displays their names them if their names are in that store.
 * If their names are not in the store, it will display "Unknown" with a
 * link to that planet/film.
 */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getPlanetFromAPI } from "./actions/planets";
import Sublist from "./Sublist";

function Planet() {
  const { id } = useParams();
  const planet = useSelector((st) => st.planets[id]);
  const filmState = useSelector((st) => st.films);
  const characterState = useSelector((st) => st.people);
  const dispatch = useDispatch();
  const missing = !planet;

  useEffect(
    function () {
      if (missing) {
        dispatch(getPlanetFromAPI(id));
      }
    },
    [missing, id, dispatch]
  );

  if (missing) return "loading...";

  const films = planet.films.map((fid) => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown",
  }));

  const residents = planet.residents.map((pid) => ({
    id: pid,
    url: `/people/${pid}`,
    display: characterState[pid] ? characterState[pid].name : "Unknown",
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {planet.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p>
        <b>Climate: </b>
        {planet.climate}
      </p>
      <p>
        <b>Population: </b>
        {planet.population}
      </p>

      <Sublist title="People" items={residents} />
      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Planet;
