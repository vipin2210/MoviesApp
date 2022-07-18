import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import combineReducers from './reducers';

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger=function ({dispatch,getState}){
//   return function(next){
//     return function (action){
//       //middleware code
//       console.log('ACTION_TYPE = ',action.type);
//       next(action);
//     }
//   }
// }

const logger=({dispatch,getState})=>(next)=>(action)=>{
  //logger code
 if(typeof action !=='function'){
   console.log('ACTION_TYPE = ',action.type);
 } 
next(action);
}


// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   //logger code

//   if(typeof action ==='function'){
//     action(dispatch);
//     return ;  
//   }

//   next(action);
// }

const store = legacy_createStore(combineReducers,applyMiddleware(thunk));
console.log('store', store);
// console.log('Before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });] 

// console.log('After state', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
