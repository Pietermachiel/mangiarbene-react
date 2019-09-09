import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export default (props) => {
   
    var parsedBookContent = ReactHtmlParser(props.content);

    return (
        <React.Fragment>
        <div className="books layout-books">
            <h1>{ props.title }</h1>    
        </div>
        <div className="book-box">
            <div className="book-box_image">
                <img src={`/public/img/books/${props.id}_cover.jpg`} alt=""/>
            </div>
            <div className="book-box_credits">
                <h6>{  props.author }</h6>    
                <p>{  props.publisher } { props.year }</p>    
                <p>Kitchen: { props.kitchen }</p>    
                <p>Source / Read more <Link to='{ url }' target="_blank"  rel="noopener noreferrer">&nbsp;{ props.link }</Link></p> 

            </div>
        </div>
        <br/>
        <div className="book-content">
            {parsedBookContent}
        </div>
        <p>Recipes</p>
        <div className="book-links">

        {props.recipes
            .filter(r => r.bookId === props.id)
            .map(({ id, title, index }, _id) => {
            return (
            <Link key={_id} to={`/recipes/${id}`}>
            <h5>{ title } { index }</h5>
            </Link>                
            )
        })}

        </div>
        </React.Fragment>

    )
}
