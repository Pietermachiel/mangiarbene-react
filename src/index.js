import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./style.css";
import App from './App';
import ScrollToTop from 'react-router-scroll-top';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

console.log(`App works`);

document.title = "MangiarBene";

const booksReducer = (state=[], action) => {
    switch(action.type) {
      case 'LOAD_BOOKS':
        return action.payload
      default:
        return state
    }
  }
  
  const recipesReducer = (state=[], action) => {
    switch(action.type) {
      case 'LOAD_RECIPES':
        return action.payload
      default:
        return state
    }
  }
  
  const postsReducer = (state=[], action) => {
    switch(action.type) {
      case 'LOAD_POSTS':
        return action.payload
      default:
        return state
    }
  }
  
  const rootReducer = combineReducers({
    books: booksReducer,
    recipes: recipesReducer,
    posts: postsReducer,
  })
  
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const app = <Provider store={store}>
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('main'));

module.hot.accept();
