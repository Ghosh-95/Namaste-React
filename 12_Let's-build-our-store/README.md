# Day 12 - Theory Assignments

### Q1. Difference between 'useContext' and 'redux'

useContext is a React hook, widely used to manage global state or pass data across components in React. This hook is a good solution to the inconvenience of 'prop-drilling'. It is usually used in smaller projects or medium sized application

And Redux is state management libray that provides a single global state store to mange the state of whole application. Redux employes the concept of actions and reducers to update state and it can be used alongside react. It is more complex but efficent to use in large-scale application or such scenarios.

### Q2. Advantage of using Redux Toolkit over Redux.

Redux-Toolkit is a Redux library that is used for writing Redux code more efficiently. It gives us boilerplates that enables us to write Redux code in smaller space. 

Issues with Redux:
- Configuring a redux store is too complicated.
- Redux requires too much boilerplate code which makes it cumbersome to write efficient and clean code.
- State is immutable and Redux doesn't allow you to mutate the original state.

These problems disappear when we use Redux-toolkit:
- RTK (Redux-toolkit) provides hook based implementation of Redux.
- RTK gives the ability to write mutable state updates in the reducers.
- It also eliminates the use of extra coding by providing boilerplates.
- It also provides automatic support for Redux Dev-tools Extension and for immer.js library which is a great tool to deal with immutable objects (or states). 
- You can also use the various predefined functions of Redux Toolkit which not only speeds up the process but also saves time.

### Q3. Explain Dispatcher.

`dispatch` is a function of the Redux store. In order to dispatch an action, we invoke the dispatcher function. This is only way to trigger a state change. The store will run it's reducer function and brings the new state value to update.

### Q4. Explain Reducer.

A `reducer` is a function that receives the current state and action object, and decides how to update the state if necessary, and **returns a new state**. You can think of a reducer as an event listener which handles event based on receiving different types of actions (events).

### Q5. Explain slices

A `slice` is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.


### Q6. Explain Selectors.

`Selectors` are function that are used to extract specific pieces of information from the store state value. They are used to 'subscribe' to a specific part of the store to get specific results.

### Q7. Explain createSlice and the configuration it takes.

createSlice is a function that receives an initial state, an object of reducer functions and a slice name. It automaticlly generates action creators and action types that corresponds to the reducers and state.

**Parameters**
- `initialState`: The initial value of the slice of state.
- `name`: The name of this slice of state.
- `reducers`: An object containing Redux 'case reducer' functions; functions that are intended to handle a specific action type, similar to a 'case' in a switch statement. Reducers funcation can mutate the states.\
The keys in this object will be used to generate string action type constants, and these action will show up in 'Redux Devtool' extension when they are 'dispatched'. If any other part of the application happens to despatch an acton with the same string type, the corresponding reducer will run.

    ```javascript
    import {createSlice} from '@reduxjs/toolkit';

    const slices = createSlice({
        name: "Counter",
        initialState: 0,
        reducers: {
            increment: function(state) { // state parameter is 'initialState'
                return state + 1;
            },
        }
    })

    // This slice will handle 'Counter/increment' action.
    ```
    Each reducer function takes a 'state' and an 'action' parameter that represents the 'initialState' and the action respectively.

    ```js
    reducers: {
            increment: function(state, action) {
                console.log(action);
                return state + 1;
            },
        }
    ```