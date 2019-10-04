import React from 'react';
import { Link } from 'react-router-dom';
// import _ from 'lodash';
import { slugify } from '../common/common';

export default (props) => {
        
    const { books, recipes, posts } = props;

    // const recipeNumber = recipes.length;
    // var recipeRandom = _.random(recipeNumber, true);  
    // recipeRandom = Math.floor(recipeRandom);

    // const bookNumber = books.length;
    // var bookRandom = _.random(bookNumber, true);  
    // bookRandom = Math.floor(bookRandom);

    return (    
        <div className='home'>
            <div className="home-img_artisjok">
                <img src="./public/img/artisjok.jpg" alt=""/>
                <div className="theart">
                    <Link to={`/books/${slugify("Science in the Kitchen and the Art of Eating Well")}`}>The art of eating well</Link>
                </div>       
            </div>
            <div className="home-quote">
                <p>
                "Kooking is a troublesome sprite. Often it may drive you to despair. Yet it is also very rewarding, for when you do succeed, or overcome a difficulty in doing so, you feel the satisfaction of a great triumph. <br/><br/> If you do not aspire to become a premier cook, you do not need to have been born with a pan on your head to become a good one. <span>Passion, care, and precision of method will generally suffice; then, of course, you must use the finest ingredients as your raw materials, for these will make you shine.</span>"
                </p>
                <br/>
                <p className="pellegrino">    
                    <b>Pellegrino Artusi</b> 
                    <Link to={`/books/${slugify("Science in the Kitchen and the Art of Eating Well")}`}>– Science in the Kitchen and the Art of Eating Well</Link>
                </p>
            </div>
            <hr/>
            <br/>
            {/* latest post */}
            <p className="pl-2em">latest post</p>
            {posts
                .filter((post, id) => id === 0)
                .map((post, id) => {
                    const date = new Date(post.date);
                    // if (id === 0 && hit === "latest") 
                    return (
                        <React.Fragment key={id}>
                        <div className="blog blog-post">
                        <Link to={`/posts/${slugify(post.title)}`}>
                            <h3>
                                { post.title }   
                            </h3> 
                        </Link>        
                        <p className="summary">
                            { post.category }
                            <span className="date">
                                &nbsp;{ date.getDate() }/{ date.getMonth() }/{ date.getFullYear() }
                            </span>
                        </p>
                        </div>                                    
                        </React.Fragment> 
                    )
                }
                )} 
            {/* recipe of the day */}
            <p className="pl-2em">recipe of the day</p>
            {recipes
                .filter((recipe, id) => id === 3 )
                .map(recipe => {

                return (
                    <div key={recipe.index} className="recipe">
                    <Link to={`/recipes/${slugify(recipe.title)}`}>
                        <h3>{ recipe.title} { recipe.index }</h3> 
                    </Link>        
                        <div className="credits">
                            <h5>
                                { recipe.product }
                                <span>
                                    <Link to={`/books/${recipe.bookId}`}>
                                    &nbsp;&nbsp;{recipe.bookTitle}
                                    </Link>
                                </span>
                            </h5>
                        </div>        
                    </div>
                )
            }
            )} 
            {/* book of the day */}
            <p className="pl-2em">book of the day</p>
            {books
            .filter((book, id) => id === 3)
            .map(book => {
                return (
                <div key={book.index} className="book">
                <Link to={`/books/${book.id}`}>
                    <h3>
                        <span>{ book.year}</span> { book.title }
                    </h3> 
                </Link>        
                    <div className="credits">
                        <h5>{ book.author }</h5>
                    </div>        
                </div>                    
                )
            }
            )}  
            {/* database */}
            <p className="pl-2em">database</p>
            <div className="home-database">
                <Link to="/recipes" className="nav-link">
                    <h3>{ recipes.length } recipes </h3>    
                </Link>
                <Link to="/books" className="nav-link">
                    <p>{ books.length } books</p>   
                </Link>
            </div>        

            {/* website */}
            <p className="pl-2em">Jekyll website</p>
            <a href='https://trim-seahorse.cloudvent.net' target="_blank" rel="noopener noreferrer">hosted at CloudCannon</a>

        </div>
        )
}



  