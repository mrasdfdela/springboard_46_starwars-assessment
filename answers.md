- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  They are patterns used to match character combinations in strings. They help to find special characters or a group of characters, which can be used to search and edit strings that might be difficult to find otherwise.
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  This is done using redux-persist, which saves the redux store to the local storage of the browser..
- What does `combineReducers` do? Why are we using it? 
  It is a function that allows us to combine a set of reducer functions to a single (root) reducer. This makes it possibly to separate reducers (ex: by topic), keep them in different files, and make it easier to manage their corresponding states. We use it to similify how the Star Wars app manages separate states for Film, People, and Planets.
- How does the "Reset to Fresh Exploration" feature work?
  It dispatches the resetAll() / {type: RESET_ALL} action, which is referenced in the films, people, and planets reducers and resets the store/states to INITIAL_STATE.
- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
  They share a common structure that is repeatable, so instead of duplicating their code over and over, they reference a single ItemList component (which itself can be changed and populate to all three components quickly and easily).
- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  Because this would require iterating through an array of films O(n); instead, the app looks for a specific film that will always be referenced in the same way O(1). Realistically, this wouldn't affect perfomance unless the film list grew to be large.
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  How to manage action, type, and reducers files.
  
- Which Star Wars character would make the best React developer, and why?
  C3PO, because he is fluent in 6 millions languages.