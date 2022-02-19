#StarWarsly
This app connects to the Star Wars api (https://swapi.dev/api/) and has pages to display lists and individual Films, People, and Planets from a galaxy far, far away...

## Basic Functionality
The special thing about this site is that it allows the user to explore individual films, people, and planets, but when viewing the lists, it will only display items that the users have previously visited. StarWarsly does this by keeping a Redux store of visited pages; when an individual page is visited, its ID is saved to the store and will be displayed in it's corresponding page in the future. These individual pages have links for exploring their related pages of other categories (ex: the film page for New Hope has a full list of related people and planets), where users can navigate to previously visited pages (ex: Luke Skywalker's page if it has been previously visited) or yet-to-be uncovered pages (listed as "Unknown").

## Notable tools
This app was created using Create-React-App and uses redux to manage states. The store is saved to browser's local storage, so that it is persistent if the user comes back to explore the site. The store also uses the thunk middleware to make calls to the Star Wars API and pass the returned data into the dispatched action.

## File Structure
- actions (folder)
    - films, people, & planets actions
    - reset
    - types
- reducers (folder)
    - films, people, & planets
    - root
- index.js / index.css
- App / App.css
  - NavBar / NavBar.css
  - Routes
    - HomePage
    - Film
    - Film List
    - Planet
    - Planet List
    - People
    - People List
    - ItemList (used by 'List' components')
    - Sublist
- store (for initializing the redux-store & setting up middleware)
- service worker

## Libraries
- create-react-app
- axios
- redux
- react-redux
- redux-thunk
- redux-persist
- redux-devtools-extension
