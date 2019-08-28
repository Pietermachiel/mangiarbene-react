import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify } from './common/common';

class Books extends Component {

    render() {
        const kitchen = [
            "italian", "dutch", "spanish", "oriental", "english", "usa"
        ]
        const { books } = this.props;
        return (
            <div>
                <div className="books">
                {kitchen.map(hit => {
                    return (
                        <React.Fragment key={hit}>
                        <p className="kitchen-title">{hit}</p>

                        {books.map(book => 
                            hit === book.kitchen ?
                            <div key={book.index} className="book">
                            <Link to={"/books/" + slugify(book.title)}>
                                <h3>
                                    <span>{ book.year}</span> { book.title }
                                </h3> 
                            </Link>        
                                
                                <h5>{ book.author }</h5>
                                      
                            </div>
                            :
                            null
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