import React, { Component } from 'react';
import { Switch, Route  } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Post from './components/Posts/Post';
import Recipes from './components/Recipes';
import Recipe from './components/Recipes/Recipe';
import Books from './components/Books';
import Book from './components/Books/Book';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import { hot } from 'react-hot-loader/root';

const apiEndpoint = 'https://trim-seahorse.cloudvent.net/api';

export default class App extends Component {
  state = {
    books: [],
    recipes: [],
    posts: []
  }

  async componentDidMount() {
    const books = await (await fetch(`${apiEndpoint}/books.json`)).json()
    this.setState({ books })
    const recipes = await (await fetch(`${apiEndpoint}/recipes.json`)).json()
    this.setState({ recipes })
    const posts = await (await fetch(`${apiEndpoint}/blog.json`)).json()
    this.setState({ posts })
  }

  render() {
    const { books, recipes, posts } = this.state;

    return (
      <div className='main'>
        <Nav />
        <Switch>
        <Route exact path='/' render={
          (props) => <Home {...props} books={books} recipes={recipes} posts={posts} />
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
        <Route exact path='/recipes' render={
          (props) => <Recipes {...props} recipes={recipes} />
        } />
        <Route path='/recipes/:id' render={
          (props) => {
            const recipe = recipes.find(recipe => recipe.id === props.match.params.id)
            return <Recipe {...props} {...recipe} books={books} />
          }
        } />
        <Route exact path='/books' render={
          (props) => <Books {...props} books={books} />
        } />
        <Route path='/books/:id' render={
          (props) => {
            const book = books.find(book => book.id === props.match.params.id)
            return <Book {...props} {...book} recipes={recipes}/>
          }
        } />
        </Switch>
        <Footer />
      </div>
    );
  }
}


