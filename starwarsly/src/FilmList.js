/**
 * This displays a full list of Star Wars films saved to the store.
 * Films are added as they visited via, the homepage or the
 * planets/people pages.
*/

import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

function FilmList() {
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;
