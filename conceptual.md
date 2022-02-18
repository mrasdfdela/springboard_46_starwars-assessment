### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
Redux is a library for managing states
- What are three features of the Redux developer tool in Chrome?

- What is a store?
A place that redux keeps stored states
- What is a reducer?
A redux function for managing states
- What is an action?
A set of instructions that tell reducers how to update state
- What is an action creator?
A function for creating those actions
- How does data flow in a React/Redux application?
A dispatch is called, which calls a reducer function, which calls the root reducer, and which at the end saves the complete state tree to the redux store
- What is the purpose of the `<Provider>` component?
It wraps the <App> component to allow it to access the Redux store
- What is the purpose of the `useSelector` hook? What does it return?
It allows React to access redux states. It can return a single value, or an object w/ key-value pairs for states
- Describe the `useDispatch` hook. What do you use it for?
The useDispatch accepts an action and allows React to dispatch actions to the Redux store.
- What is redux-thunk and why would you use it?
A middleware that allows react to make asynchronous calls. It is useful because dispatches can normally only accept a simple action object, but redux-thunk allows dispatches to accept an asynchronous promise & return that value into the action.
- What are propTypes?
A package/library for verifying a if component is being passed a certain type of property
- Describe the `useCallback` hook.  What is it used for?
It returns a memoized callback, saving the results of a function call for later use. It is used inside useEffect hooks to prevent a function from being called in an infinite loop if the dependent props change but the function output does not change.
- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
useReducer is built in, so does not require a package installation like react-redux. It accepts state & action parameters w/ a reducer function, but returns a current state & dispatch method together. When combining it w/ useContext, it can mimic a redux store (useReducer can be used to create a state from a action creator, and that state can be passed into a provider. React recommends passing in separate states into separate Providers/contexts to avoid unnecesarily re-rendering components if state props change). Note that a redux store would be better for managing many states.