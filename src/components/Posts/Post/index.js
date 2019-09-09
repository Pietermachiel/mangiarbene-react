import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify } from '../../common/common';
import ReactHtmlParser from 'react-html-parser';

console.log("Post works!");

export default (props) => {
    console.log(props);   const date = new Date(props.date);
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
            {props.books.length !== 0 ? <p>book</p> : null}

                    <Link to={`/books/${slugify(props.books)}`}>
                        <h5>{props.books}</h5>
                    </Link>


        </div>    
        </React.Fragment>

    )

}

// function mapStateToProps(state) {  
//     return {
//       posts: state.posts,
//     }
// }
  
// export default connect(mapStateToProps)(Post)