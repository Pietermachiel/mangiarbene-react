import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify, truncate } from './common/common';
import ReactHtmlParser from 'react-html-parser';

class Posts extends Component {

    render() {
        const category = [
            "latest", "archive"
        ]
        const { posts } = this.props;

        return (
            <div>
                <div className="blog">
                {category.map((hit, id) => {
                    return (
                        <React.Fragment key={id}>
                        <p className="post-chapeau">{hit}</p>
                        {posts
                        .filter((post, id) => id === 0 && hit === "latest")
                        .map((post, id) => {
                            const date = new Date(post.date);
                            const truncatetext = truncate(post.content, 307);
                            const parsedPostContent = ReactHtmlParser(truncatetext);
                            // if (id === 0 && hit === "latest") 
                            return (
                                <React.Fragment key={id}>
                                <div className="blog-post">
                                <Link to={"/blog/" + slugify(post.title)}>
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
                                <p>{ parsedPostContent }</p>     
                                </div>                                    
                                </React.Fragment> 
                            )
                        }
                        )}       
                        {posts
                        .filter((post, id) => id !== 0 && hit === "archive")
                        .map((post, id) => {
                            const date = new Date(post.date);
                            return (
                                <React.Fragment key={id}>
                                <div className="blog-post">
                                <Link to={"/blog/" + slugify(post.title)}>
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
                        </React.Fragment>
                    )
                }
                )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {  
    return {
      posts: state.posts,
    }
  }
  
export default connect(mapStateToProps)(Posts)