/**
 * This displays a full list of Star Wars planets saved to the store.
 * Planets are added as they are visited via the homepage or the 
 * film/people pages.
*/
import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

function PlanetList() {
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;