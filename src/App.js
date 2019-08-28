import React, { Component } from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Post';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Books from './components/Books';
import Book from './components/Book';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { hot } from 'react-hot-loader/root';

const apiEndpoint = 'https://trim-seahorse.cloudvent.net/api';

class App extends Component {
  state = {};

  componentDidMount() {
    const { loadBooks } = this.props
    fetch(`${apiEndpoint}/books.json`)
    .then(response => response.json())
    .then((json => {
      loadBooks(json)
    }))  

    const { loadRecipes } = this.props
    fetch(`${apiEndpoint}/recipes.json`)
    .then(response => response.json())
    .then((json => {
      loadRecipes(json)
    }))  

    const { loadPosts } = this.props
    fetch(`${apiEndpoint}/blog.json`)
    .then(response => response.json())
    .then((json => {
      loadPosts(json)
    }))  

  }
  render() {
    return (
      <div className='main'>
        <Nav />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/blog' component={Posts}/>
        <Route path='/blog/:url' component={Post}/>
        <Route exact path='/recipes' component={Recipes}/>
        <Route path='/recipes/:url' component={Recipe}/>
        <Route exact path='/books' component={Books}/>
        <Route path='/books/:url' component={Book}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  // console.log("App: mapDispatchToProps");
  return {
    loadBooks: (books) => {
      dispatch({ type: 'LOAD_BOOKS', payload: books })
    },
    loadRecipes: (recipes) => {
      dispatch({ type: 'LOAD_RECIPES', payload: recipes })
    },
    loadPosts: (posts) => {
      dispatch({ type: 'LOAD_POSTS', payload: posts })
    },

  }
}

export default hot(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));

