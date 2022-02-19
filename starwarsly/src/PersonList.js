/**
 * This displays a full list of Star Wars characters saved to the store.
 * People are added as their pages are visited via films/planets pages.
 */

import React from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";

function PersonList() {
  const items = useSelector((st) =>
    Object.values(st.people).map((p) => ({ ...p, url: `/people/${p.id}` }))
  );
  return <ItemList title="People" items={items} />;
}

export default PersonList;
