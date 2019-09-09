import React, { Component } from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Posts/Post';
import Recipes from './components/Recipes';
import Recipe from './components/Recipes/Recipe';
import Books from './components/Books';
import Book from './components/Books/Book';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { hot } from 'react-hot-loader/root';

const apiEndpoint = 'https://trim-seahorse.cloudvent.net/api';

class App extends Component {
  state = {};

  async componentDidMount() {
    const { loadBooks } = this.props
    await fetch(`${apiEndpoint}/books.json`)
    .then(response => response.json())
    .then((json => {
      loadBooks(json)
    }))  
    const { loadRecipes } = this.props
    await fetch(`${apiEndpoint}/recipes.json`)
    .then(response => response.json())
    .then((json => {
      loadRecipes(json)
    }))  
    const { loadPosts } = this.props
    await fetch(`${apiEndpoint}/blog.json`)
    .then(response => response.json())
    .then((json => {
      loadPosts(json)
    }))  
  }

  render() {
    const { books, recipes, posts } = this.props;
    console.log(posts);
    return (
      <div className='main'>
        <Nav />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/books' render={
          (props) => <Books {...props} books={books} />
        } />
        <Route path='/books/:id' render={
          (props) => {
            const book = books.find(book => book.id === props.match.params.id)
            return <Book {...props} {...book} recipes={recipes}/>
          }
        } />
        <Route exact path='/recipes' render={
          (props) => <Recipes {...props} recipes={recipes} />} />
        <Route path='/recipes/:id' render={
          (props) => {
            const recipe = recipes.find(recipe => recipe.id === props.match.params.id)
            return <Recipe {...props} {...recipe} books={books} />
          }
        } />
        <Route exact path='/blog' render={
          (props) => <Posts {...props} posts={posts} books={books} />
        } />
        <Route path='/blog/:id' render={
          (props) => {
            const post = posts.find(post => post.id === props.match.params.id)
            return <Post {...props} {...post} />            
          }
        } />
 
        </Switch>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
      books: state.books,
      recipes: state.recipes,
      posts: state.posts,
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

