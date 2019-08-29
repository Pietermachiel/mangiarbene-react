import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify } from './common/common';
import _ from 'lodash';

class Books extends Component {

    render() {
        const kitchen = [
            "italian", "dutch", "spanish", "oriental", "english", "usa"
        ]
        var { books } = this.props;
        books = _.sortBy(books, ['year']);
        
        return (
            <div>
                <div className="books">
                {kitchen.map(hit => {
                    return (
                        <React.Fragment key={hit}>
                        <p className="kitchen-title">{hit}</p>

                        {books
                        .filter(b => hit === b.kitchen)
                        .map(book => 
                            <div key={book.index} className="book">
                            <Link to={"/books/" + slugify(book.title)}>
                                <h3>
                                    <span>{ book.year}</span> { book.title }
                                </h3> 
                            </Link>        
                                
                                <h5>{ book.author }</h5>
                                      
                            </div>
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
      books: state.books,
    }
}
  
export default connect(mapStateToProps)(Books)