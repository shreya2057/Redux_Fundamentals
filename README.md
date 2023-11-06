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
const increment_number = ()=>{
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