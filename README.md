# Redux

Redux is a pattern and library for managing and updating application state using events called action. It serves as centralised store for the state that needs to be used across the entire application with rules ensuring that the state can only be updated in a predictable fashion. In redux the data that needs to be tracked and used in different components are stored in a centralised 'Redux store'. The components that needs this data calls the store.

<u>**Uses of Redux**</u>

<li>Data flow in React is unidirectional. So, it is difficult for parent to access data.</li> 

<li>It helps to manage the global state</li>

<br/>

<u>**Redux main topic**</u>

<li>Action -> What to do</li>
<li>Reducer -> How to do </li>
<li>Store -> Holds the states of the application </li>
<li>Dispatch -> Triggering the action</li>

## Action 

<li>Pure javascript object that have a type field.</li>
<li>The type property indicates the type of action being performed.</li>
<li>Action tell what to do, but does not tell how to do.</li>

```
return {
    type: 'INCREMENT',
    payload: num
}
```

<u>**Action Creator**</u>

<li>Pure function that creates an action.</li>

```
const increment_number = (num)=>{
    return {
        type: 'INCREMENT',
        payload: num
    }
}
```

## Reducer

<li>Reducers are functions that specify how the application's state changes in response to action.</li>
<li>They take the current state and an action as an arguments.</li>
<li>They return a new state.</li>

```
const reducer_function = (state,action){
    // statements
}

```

## Store

<li>The Redux store brings together the state, action and reducers that make up the application.</li>
<li>There is only single store in a Redux application.</li>
<li>Every Redux store has single root reducer function</li>

```
import {createStore} from "redux";
const store = createStore(rootReducers); 
```

## Redux Principles

<li>Single source of truth -> single store only.</li>
<li>State is Read-Only -> way to change state is dispatch action.</li>

## Install Redux

npm install redux react-redux

## Steps
<li>Create action folder and create actions files and function</li>
<li>Create reducer folder and create reducers and index files and function</li>
<li>In reducers files create functions and then reducers are combined in index file</li>
<li>Create store file and store is created using combined reducers created in index of reducer folder</li>
<li>store file is then imported in main.jsx file</li>

## Provider

The Provider component is used at the root of your React component tree to ensure that Redux store data is accessible to any component that needs it, without having to pass props manually at each level of the component hierarchy.

```
<Provider store={store}>
    <App />
</Provider>,
```

## useSelector

useSelector is a hook provided by the React-Redux library that allows to select data from the Redux store in a functional component. It is commonly used in React components to access and read data from the Redux store. useSelector takes a selector function as an argument and returns the selected data from the store.

```
import {useSelector} from "react-redux"
const stateData = useSelector((state) => state.reducerFunction);
```

## useDispatch

useDispatch is a hook provided by the React-Redux library that allows functional components to dispatch actions to the Redux store. It provides a reference to the dispatch function, which is used to send actions to the Redux store.

```
import {useDispatch} from "react-redux"
const dispatch = useDispatch();

// Dispatch an action
dispatch(actiom);
```

### Redux program flow

<li>Dispatch tiggers action.</li>
<li>After action is triggered, reducerFunction runs which updates the state.</li>
<li>Using selector, the updated state is used.</li>
