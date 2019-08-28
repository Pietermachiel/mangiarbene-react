import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify } from './common/common';
import ReactHtmlParser from 'react-html-parser';

console.log("Post works!");

export function Post (props) {

    const post = props.posts.find(({ title }) => slugify(title) === props.match.params.url);
    const date = new Date(post.date);
    const parsedPostContent = ReactHtmlParser(post.content);
    return (
        <React.Fragment>
        <div className="layout-blog">
            <h2>{post.title}</h2>
        </div>   
        <p><a className="pieterroozen" href="https://roozen.nl" target="_blank"  rel="noopener noreferrer">{ post.author }</a> – { date.getDate() }/{ date.getMonth() }/{ date.getFullYear() }</p>   
        <div className="blog">
            <div className="blogpost kramdown">{parsedPostContent}</div>
        </div>  
        <div className="blog-links">
            {post.books.length !== 0 ? <p>books</p> : null}
            {post.books.map((hit, id) => {
                return (
                    <Link key={id} to={`/books/${slugify(hit)}`}>
                        <h5>{hit}</h5>
                    </Link>
                )
            })}
            <br/>
            {/* {post.recipes.length !== 0 ? <p>recipes</p> : null} 
            {post.recipes.map((hit, id) => {
                return (
                    <Link key={id} to={`/recipes/${slugify(hit)}`}>
                        <h5>{hit}</h5>
                    </Link>
                )
            })}    */}
        </div>    
        </React.Fragment>

    )

}

function mapStateToProps(state) {  
    return {
      posts: state.posts,
    }
}
  
export default connect(mapStateToProps)(Post)