import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export default (props) => {
    const date = new Date(props.date);
    const parsedPostContent = ReactHtmlParser(props.content);

    return (
        <React.Fragment>
        <div className="layout-blog">
            <h2>{props.title}</h2>
        </div>   
        <p><a className="pieterroozen" href="https://roozen.nl" target="_blank"  rel="noopener noreferrer">{ props.author }</a> – { date.getDate() }/{ date.getMonth() }/{ date.getFullYear() }</p>   
        <div className="blog">
            <div className="blog-post kramdown">{parsedPostContent}</div>
        </div>  
        <div className="blog-links">
            {props.book !== "" ? <p>book</p> : null}
            <Link to={`/books/${props.bookId}`}>
                <h5>{props.book}</h5>
            </Link>
        </div>   
        </React.Fragment>
    )
}