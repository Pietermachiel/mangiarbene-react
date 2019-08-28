import React from 'react';
import { connect } from 'react-redux';
import { slugify } from './common/common';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

console.log("Book works!");

export function Book (props) {
   
    const book = props.books.find(({ title }) => slugify(title) === props.match.params.url);
    var parsedBookContent = ReactHtmlParser(book.content);
    var content = parsedBookContent.map(c => c.props.children[0]);
    const slugthebook = slugify(book.title);
    console.log(slugthebook);

    return (
        <React.Fragment>
        <div className="layout-books">
            <h1>{ book.title }</h1>    
        </div>
        <div className="book-box">
            <div className="book-box_image">
                <img src={`/img/books/${slugify(book.title)}_cover.jpg`} alt=""/>
            </div>
            <div className="book-box_credits">
                <h6>{  book.author }</h6>    
                <p>{  book.publisher } { book.year }</p>    
                <p>Kitchen: { book.kitchen }</p>    
                <p>Source / Read more <Link to='{ book.url }' target="_blank"  rel="noopener noreferrer">&nbsp;{ book.link }</Link></p> 

            </div>
        </div>
        <br/>
        <div className="book-content">
            {content.map((c, id) => {
                return (
                    <p key={id}>{c}</p>
                )
            } )}
        </div>
        <p>Recipes</p>
        <div className="book-links">

        {book.recipes.map(hit => {
            return (
            <Link key={hit.index} to={`/recipes/${slugify(hit.title)}`}>
            <h5>{ hit.title } { hit.index }</h5>
            </Link>                
            )
        })}

        </div>
        </React.Fragment>

    )

}

function mapStateToProps(state) {  
    return {
      books: state.books,
    }
}
  
export default connect(mapStateToProps)(Book)